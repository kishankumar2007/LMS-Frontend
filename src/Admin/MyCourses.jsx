import { Book, Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { adminCourses as fetchAdminCourses, deleteCourse } from "../Api/courseApi";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const { adminCourses, setAdminCourses } = useAdmin();
  const [courseStatus, setCourseStatus] = useState({});
  const navigate = useNavigate();


  const updateStatus = async (course) => {
    const toastId = toast.loading("Updating...");

    try {
      const updated = {
        ...course,
        isPublic: !course.isPublic,
      };

      const res = await axios.patch(
        `${BASE_URL}/edit-course/${course._id}`,
        updated,
        { withCredentials: true }
      );

      toast.dismiss(toastId);
      toast.success(res.data?.message);

      setAdminCourses((prev) =>
        prev.map((c) =>
          c._id === course._id ? { ...c, isPublic: updated.isPublic } : c
        )
      );
    } catch (error) {
      toast.dismiss(toastId);
      toast.error(error?.response?.data?.message || "Update failed");
    }
  };


  const handleDelete = async (courseId) => {
    try {
      const res = await deleteCourse(courseId);

      setAdminCourses((prev) =>
        prev.filter((course) => course._id !== courseId)
      );

      toast.success(res.message);
    } catch (error) {
      toast.error(error.message);
    }
  };


  useEffect(() => {
    const map = {};
    adminCourses.forEach((course) => {
      map[course._id] = course.isPublic ? "public" : "private";
    });
    setCourseStatus(map);
  }, [adminCourses]);


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await fetchAdminCourses();
        if (res) setAdminCourses(res);
      } catch (error) {
        toast.error(error.message || "You are offline.");
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className="w-full min-h-screen bg-black pt-12">
      <div className="max-w-7xl mx-auto bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h2 className="text-xl font-semibold mb-4 text-white">
          All Courses
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700 text-white">
                <th className="text-left py-3 px-2">No.</th>
                <th className="text-left py-3 px-2">Course Name</th>
                <th className="text-left py-3 px-2">Published Date</th>
                <th className="text-left py-3 px-2">Amount</th>
                <th className="text-left py-3 px-2">Status</th>
                <th className="text-left py-3 px-2">Category</th>
                <th className="text-left py-3 px-2">Add</th>
                <th className="text-left py-3 px-2">Delete</th>
              </tr>
            </thead>
              {adminCourses?.length === 0 && (
                <tbody>
                  <tr>
                    <td colSpan="8" className="text-center py-6 text-gray-500 ">
                      <Book size={22} className=" inline-block mx-4 text-purple-700" />
                      No courses available
                    </td>
                  </tr>
                </tbody>
              )}
            <tbody>
              { adminCourses?.map((course, idx) => (
                <tr
                  key={course._id}
                  className="border-b border-gray-800 text-gray-400"
                >
                  <td className="py-4 px-2 font-medium">{idx + 1}</td>
                  <td className="py-4 px-2">{course?.name}</td>
                  <td className="py-4 px-2">
                    {new Date(course?.createdAt).toDateString()}
                  </td>
                  <td className="py-4 px-2">₹{course?.amount}</td>


                  <td className="py-4 px-2">
                    <select
                      className="px-3 py-1 rounded-full text-xs border-none outline-none"
                      value={courseStatus[course._id]}
                      onChange={() => updateStatus(course)}
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                  </td>

                  <td className="py-4 px-2">{course?.category}</td>

                  <td className="py-4 px-2">
                    <button
                      className="p-1 text-gray-400 hover:text-gray-300"
                      onClick={() =>
                        navigate(`/admin/course/${course._id}/add-chapter`)
                      }
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </td>

                  <td className="py-4 px-2">
                    <button
                      className="p-1 text-red-500 hover:text-red-400"
                      onClick={() => handleDelete(course._id)}
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
