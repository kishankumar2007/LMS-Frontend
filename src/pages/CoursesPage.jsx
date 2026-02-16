import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useCourse } from "../context/CourseContext";
import { useNavigate, useSearchParams } from "react-router-dom";
import { allCourse } from "../Api/courseApi";
import NotFound from "../components/NotFound";
import { toast } from "react-hot-toast";

const CoursesPage = () => {
  const { allCourses, setAllCourses } = useCourse();
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category");

  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        setLoading(true);

        const response = await allCourse();
        if (!response) return;

        setAllCourses(response);
      } catch (error) {
        toast.error(error.message);
        navigate("/login")
      } finally {
        setLoading(false);
      }
    };

    if (allCourses.length === 0) {
      fetchCourses();
    } else {
      setLoading(false);
    }
  }, []);


  const filteredCourses = category
    ? allCourses.filter((course) => course.category === category)
    : allCourses;

  if (loading) {
    return (
      <div className="w-full pt-16 min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-white border-l-white border-b-white animate-spin rounded-full border-r-transparent"></div>
      </div>
    );
  }

  if (filteredCourses?.length === 0) {
    return <NotFound message="No Course Found" />;
  }

  return (
    <div className="w-full pt-16 min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-wrap gap-6 mb-2">
        {filteredCourses.map((course) => (
          <Card key={course._id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default CoursesPage;
