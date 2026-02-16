import { useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";
import { useCourse } from "../context/CourseContext";
import Chapter from "../components/Chapter";
import toast from "react-hot-toast";
import { getChapter } from "../Api/chapterApi";
import { useEffect } from "react";

const LearningPage = () => {
  const { courseId } = useParams();
  const { currentVideo, setCurrentVideo } = useUser();
  const { chapters, setChapters } = useCourse();

  const fetchChapters = async () => {
    try {
      setCurrentVideo(null) && setChapters([]);
      const res = await getChapter(courseId);
      setChapters(res);
    } catch (error) {
      toast.error(error.message);
    }
  };

  useEffect(() => {
    fetchChapters();
  }, [courseId]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 text-white">

      <div className="max-w-7xl mx-auto px-4 pt-20 grid grid-cols-1 lg:grid-cols-4 gap-6">

        {/* VIDEO SECTION */}
        <div className="lg:col-span-3 space-y-4">

          {/* VIDEO PLAYER */}
          <div className="w-full aspect-video rounded-xl overflow-hidden bg-black border border-white/10">
            {currentVideo ? (
              <iframe
                src={currentVideo.iframeUrl}
                className="w-full h-full"
                allow="encrypted-media; fullscreen"
                allowFullScreen
              />
            ) : (
              <div className="flex items-center justify-center h-full text-gray-400">
                Select a lesson to start learning
              </div>
            )}
          </div>

          {/* NOW PLAYING */}
          {currentVideo && (
            <div className="bg-black/30 border border-white/10 rounded-xl p-4">
              <p className="text-xs text-purple-300 uppercase tracking-wide">
                Now Playing
              </p>

              <h2 className="text-lg font-semibold text-white mt-1">
                {currentVideo.topicTitle}
              </h2>

              <p className="text-sm text-gray-300">
                {currentVideo.chapterTitle}
              </p>
            </div>
          )}

        </div>

        {/* SIDEBAR / CURRICULUM */}
        <div className="lg:col-span-1">
          <div className="h-[75vh] bg-black/30 border border-white/10 rounded-xl overflow-hidden flex flex-col">

            {/* Sidebar Header */}
            <div className="p-4 border-b border-white/10">
              <h3 className="font-semibold">Course Content</h3>
              <p className="text-xs text-gray-400">
                {chapters?.length || 0} Chapters
              </p>
            </div>

            {/* Chapters */}
            <div className="flex-1 overflow-y-auto p-2 space-y-3">
              {chapters?.map((chapter, idx) => (
                <Chapter
                  key={idx}
                  chapter={chapter}
                  isLearningPage
                />
              ))}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default LearningPage