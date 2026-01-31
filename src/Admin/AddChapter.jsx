import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/constant";

export default function AddChapter() {
  const { courseId } = useParams();


  const emptyTopic = {
    title: "",
    isFree: false,
    video: {
      fileId: "",
      preview: "",
      status: "idle" // idle | uploading | success | error
    }
  };

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isPaid, setIsPaid] = useState(true);
  const [topics, setTopics] = useState([emptyTopic]);

  /* ---------------- EDIT MODE ---------------- */
  const [editingChapterId, setEditingChapterId] = useState(null);

  /* ---------------- EXISTING CHAPTERS ---------------- */
  const [chapters, setChapters] = useState([]);

  /* ---------------- UPLOAD ---------------- */
  const uploadControllers = useRef({});
  const [uploadProgress, setUploadProgress] = useState({});

  /* ---------------- FETCH ---------------- */
  const fetchChapters = async () => {
    const res = await axios.get(
      `${BASE_URL}/course/${courseId}/chapters`,
      { withCredentials: true }
    );
    setChapters(res.data.chapters || []);
  };

  useEffect(() => {
    fetchChapters();
  }, [courseId]);

  /* ---------------- TOPIC HELPERS ---------------- */
  const addTopic = () => {
    setTopics([...topics, emptyTopic]);
  };

  const removeTopic = (index) => {
    if (topics.length === 1) return;
    setTopics(topics.filter((_, i) => i !== index));
  };

  const updateTopic = (i, key, val) => {
    const copy = [...topics];
    copy[i][key] = val;
    setTopics(copy);
  };

  const moveTopic = (i, dir) => {
    const copy = [...topics];
    console.log(dir)
    const target = i + dir;

    if (target < 0 || target >= copy.length) return;
    [copy[i], copy[target]] = [copy[target], copy[i]];
    setTopics(copy);
  };

  /* ---------------- VIDEO UPLOAD ---------------- */
  const uploadVideo = async (file, index) => {
    if (!file) return;

    const controller = new AbortController();
    uploadControllers.current[index] = controller;

    const copy = [...topics];
    copy[index].video.status = "uploading";
    setTopics(copy);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "frontend_video");

    try {
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/kishan-kumar-2007/video/upload",
        formData,
        {
          signal: controller.signal,
          onUploadProgress: (e) => {
            setUploadProgress((prev) => ({
              ...prev,
              [index]: Math.round((e.loaded * 100) / e.total),
            }));
          },
        }
      );

      const updated = [...topics];
      updated[index].video = {
        fileId: res.data.public_id,
        preview: res.data.secure_url,
        status: "success",
      };
      setTopics(updated);
      toast.success("Video uploaded");
    } catch {
      const updated = [...topics];
      updated[index].video.status = "error";
      setTopics(updated);
      toast.error("Video upload failed");
    }
  };

  /* ---------------- VALIDATION ---------------- */
  const canSaveChapter = () => {
    if (!title.trim()) return false;
    if (topics.length === 0) return false;

    for (const t of topics) {
      if (!t.title.trim()) return false;
      if (t.video.status === "uploading") return false;
      if (t.video.status === "error") return false;
      if (!t.video.fileId) return false;
    }
    return true;
  };

  /* ---------------- SAVE / UPDATE ---------------- */
  const saveChapter = async () => {
    if (!canSaveChapter()) {
      return toast.error("Fix errors before saving chapter");
    }

    const payload = {
      title,
      description,
      isPaid,
      topics: topics.map((t, i) => ({
        title: t.title,
        isFree: t.isFree,
        order: i,
        video: { fileId: t.video.fileId },
      })),
    };

    if (editingChapterId) {
      await axios.patch(
        `${BASE_URL}/course/chapter/${editingChapterId}`,
        payload,
        { withCredentials: true }
      );
      toast.success("Chapter updated");
    } else {
      await axios.post(
        `${BASE_URL}/course/${courseId}/chapter/create`,
        payload,
        { withCredentials: true }
      );
      toast.success("Chapter created");
    }

    resetForm();
    fetchChapters();
  };

  /* ---------------- EDIT / DELETE ---------------- */
  const editChapter = (chapter) => {
    setEditingChapterId(chapter._id);
    setTitle(chapter.title);
    setDescription(chapter.description || "");
    setIsPaid(chapter.isPaid);
    setTopics(
      chapter.topics.map((t) => ({
        title: t.title,
        isFree: t.isFree,
        video: {
          fileId: t.video?.fileId || "",
          preview: "",
          status: t.video?.fileId ? "success" : "idle",
        },
      }))
    );
  };

  const deleteChapter = async (chapterId) => {
    if (!confirm("Delete this chapter?")) return;

    await axios.delete(
      `${BASE_URL}/course/chapter/${chapterId}`,
      { withCredentials: true }
    );

    toast.success("Chapter deleted");
    fetchChapters();
  };

  const resetForm = () => {
    setEditingChapterId(null);
    setTitle("");
    setDescription("");
    setIsPaid(true);
    setTopics([emptyTopic]);
    setUploadProgress({});
    uploadControllers.current = {};
  };


  return (
    <div className="min-h-screen bg-black p-6 text-white">
      <h1 className="text-3xl font-semibold text-white mb-6">
        {editingChapterId ? "Edit Chapter" : "Add Chapter"}
      </h1>

      <div className="bg-linear-to-br from-[#0f172a] to-[#020617] rounded-2xl p-6 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-7xl mx-auto">

        {/* LEFT FORM */}
        <div className="space-y-5">
          <input
            className="w-full bg-[#020617] border border-white/10 rounded-lg p-3 text-white"
            placeholder="Chapter title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            className="w-full bg-[#020617] border border-white/10 rounded-lg p-3 text-white h-28 resize-none"
            placeholder="Chapter description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <label className="flex items-center gap-3 text-sm text-white">
            <input
              type="checkbox"
              checked={isPaid}
              onChange={() => setIsPaid(!isPaid)}
            />
            Paid Chapter
          </label>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-white font-semibold">Topics</h2>
              <button
                onClick={addTopic}
                className="bg-purple-600 hover:bg-purple-500 px-3 py-1 rounded text-sm"
              >
                + Add Topic
              </button>
            </div>

            {topics.map((t, i) => (
              <div key={i} className="bg-[#020617] border border-white/10 rounded-xl p-4 space-y-3">
                <div className="flex justify-between">
                  <span>Topic {i + 1}</span>
                  <div className="flex gap-2 text-xs">
                    <button onClick={() => moveTopic(i, -1)}>↑</button>
                    <button onClick={() => moveTopic(i, 1)}>↓</button>
                    {topics.length > 1 && (
                      <button onClick={() => removeTopic(i)} className="text-red-400">
                        Delete
                      </button>
                    )}
                  </div>
                </div>

                <input
                  className="w-full bg-black border border-white/10 rounded p-2"
                  placeholder="Topic title"
                  value={t.title}
                  onChange={(e) => updateTopic(i, "title", e.target.value)}
                />

                <input
                  type="file"
                  accept="video/*"
                  onChange={(e) => uploadVideo(e.target.files[0], i)}
                  className="text-xs"
                />

                {uploadProgress[i] && (
                  <p className="text-xs text-white/60">
                    Uploading: {uploadProgress[i]}%
                  </p>
                )}
              </div>
            ))}
          </div>

          <button
            onClick={saveChapter}
            disabled={!canSaveChapter()}
            className={`w-full py-3 rounded-xl font-semibold ${
              canSaveChapter()
                ? "bg-purple-700 hover:bg-purple-600"
                : "bg-gray-700 cursor-not-allowed"
            }`}
          >
            {editingChapterId ? "Update Chapter" : "Save Chapter"}
          </button>
        </div>

        {/* RIGHT PREVIEW */}
        <div className="bg-[#020617] border border-white/10 rounded-xl p-4 space-y-4">
          <h3 className="font-semibold">Chapter Preview</h3>

          {topics.map((t, i) => (
            <div key={i} className="bg-black border border-white/10 rounded p-3">
              <p>{t.title || `Topic ${i + 1}`}</p>
              <div className="aspect-video mt-2">
                {t.video.fileId && (
                  <iframe
                    src={`https://player.cloudinary.com/embed/?cloud_name=kishan-kumar-2007&public_id=${t.video.fileId}&resource_type=video`}
                    className="w-full h-full"
                    allow="fullscreen"  
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* EXISTING */}
      <div className="max-w-7xl mx-auto pt-10 space-y-4">
        <h2 className="text-xl font-semibold text-white">Existing Chapters</h2>

        {chapters.map((c) => (
          <div key={c._id} className="bg-[#020617] border border-white/10 rounded p-4 flex justify-between">
            <span className="text-white">{c.title}</span>
            <div className="flex gap-3">
              <button onClick={() => editChapter(c)} className="text-blue-400">Edit</button>
              <button onClick={() => deleteChapter(c._id)} className="text-red-400">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
