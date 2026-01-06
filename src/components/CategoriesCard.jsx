import { ArrowRight, VerifiedIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";


const CategoriesCard = ({ className, data }) => {

  const navigate = useNavigate();
 
  const handleClick = () => {
    navigate(`/courses?category=${encodeURIComponent(data.title)}`);
  };

  return (
    <div
      onClick={handleClick}
      style={{ animation: "slideInFromBottom 0.7s ease-in" }}
      className={`cursor-pointer max-w-96 w-full max-h-96 bg-white/5 border border-white/10 rounded-lg p-4 space-y-3 backdrop-blur-2xl hover:scale-105 transition ${className}`}
    >
      {/* Thumbnail */}
      <div className="h-40 w-full border border-white/10 rounded-md overflow-hidden">
        <img
          className="hover:scale-110 transition-transform duration-300"
          src={data.thumbnail}
          alt={data.title}
        />
      </div>

      {/* Title */}
      <div className="px-2">
        <h1 className="text-2xl text-zinc-300 font-semibold">
          {data.title}
        </h1>
        <p className="text-sm text-gray-400 line-clamp-2">
          {data.description}
        </p>
      </div>

      {/* Highlights */}
      <div className="flex flex-col gap-2 px-2">
        {data.highlights.map((item, idx) => (
          <p key={idx} className="text-xs text-slate-400 flex gap-3">
            <VerifiedIcon size={14} className="text-amber-400" />
            {item}
          </p>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-2">
        <span className="text-zinc-300">
          {data.totalCourses} Courses
        </span>
        <span className="flex gap-1 items-center text-amber-400 font-semibold">
          Explore <ArrowRight size={12} />
        </span>
      </div>
    </div>
  );
};

export default CategoriesCard;
