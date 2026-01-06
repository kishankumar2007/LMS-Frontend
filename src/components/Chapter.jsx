import { useState } from "react";
import { Plus, Minus, PlayCircle, Lock } from "lucide-react";
import { useUser } from "../context/UserContext";

export default function Chapter({ chapter }) {
  const [open, setOpen] = useState(false);
  const { setCurrentVideo, currentVideo } = useUser();

  const playTopic = (topic) => {
    if (!topic.video?.fileId) return;

    const iframeUrl = `https://player.cloudinary.com/embed/?cloud_name=kishan-kumar-2007&public_id=${topic.video.fileId}`;

    setCurrentVideo({
  chapterTitle: chapter.title,
  topicTitle: topic.title,
  iframeUrl
});
  };

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">

      {/* CHAPTER HEADER */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center px-4 py-3 hover:bg-white/5 transition"
      >
        <h3 className="text-white font-medium">
          {chapter.title}
        </h3>
        {open ? (
          <Minus className="w-4 h-4 text-gray-400" />
        ) : (
          <Plus className="w-4 h-4 text-gray-400" />
        )}
      </button>

      {/* TOPICS */}
      {open && (
        <div className="px-4 pb-3 space-y-2">
          {chapter.topics.map((topic, idx) => {
            const iframeUrl = topic.video?.fileId
              ? `https://player.cloudinary.com/embed/?cloud_name=kishan-kumar-2007&public_id=${topic.video.fileId}`
              : null;

            const isActive = currentVideo === iframeUrl;

            return (
              <button
                key={idx}
                onClick={() => playTopic(topic)}
                disabled={!iframeUrl}
                className={`w-full flex items-center justify-between text-left px-3 py-2 rounded-lg transition
                  ${isActive ? "bg-purple-600/30" : "hover:bg-white/5"}
                  ${!iframeUrl ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                <span className="text-sm text-white">
                  {topic.title}
                </span>

                {iframeUrl ? (
                  <PlayCircle className="w-4 h-4 text-purple-400" />
                ) : (
                  <Lock className="w-4 h-4 text-gray-400" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
