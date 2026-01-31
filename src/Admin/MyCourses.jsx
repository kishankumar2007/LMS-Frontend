import { Plus, Trash } from "lucide-react";
import { useEffect, useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { adminCourses, deleteCourse } from "../Api/courseApi";
import toast from "react-hot-toast";
import { BASE_URL } from "../utils/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const { myCourses, setMyCourses } = useAdmin();
  const [courseStatus, setCourseStatus] = useState({});
  const navigate = useNavigate()



  const updateStatus = async (data) => {
    try {
      const { _id, isPublic } = data
      data.isPublic = !isPublic
      toast.loading("updating...")
      const res = await axios.patch(`${BASE_URL}/edit-course/${_id}`, data, { withCredentials: true })
      console.log(res.data)
      toast.success(res.data?.message)
    } catch (error) {
      console.log(error?.response?.data?.message)
      toast.error(error?.response?.data?.message)
    }
  }

  const handleClick = async (courseId) => {
    try {
      const res = await deleteCourse(courseId)
      const updatedCourse = myCourses.filter(course => course._id != courseId)
      setMyCourses(updatedCourse)
      toast.success(res.message)
    } catch (error) {
      toast.error(error.message)
    }
  }
  useEffect(() => {
    const statusMap = {};
    myCourses.forEach(course => {
      statusMap[course._id] = course.isPublic ? "public" : "private";
    });
    setCourseStatus(statusMap);
  }, [myCourses]);


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await adminCourses();
        if (res) {
          setMyCourses(res);
        }
      } catch (error) {
        toast.error(error.message || "You are offline.");
      }
    };

    fetchCourses();

  }, []);

  return (
    <div className="w-full min-h-screen bg-black pt-12">
      <div className="max-w-7xl mx-auto bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h2 className="text-xl font-semibold mb-4 text-white">All Courses</h2>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-700 text-white  ">
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
            <tbody>
              {myCourses.map((course, idx) => (
                <tr
                  key={course._id}
                  className="border-b border-gray-800 text-gray-400"
                >
                  <td className="py-4 px-2 font-medium">{idx + 1}</td>

                  <td className="py-4 px-2">{course?.name}</td>

                  <td className="py-4 px-2 text-gray-400">
                    {new Date(course?.createdAt).toDateString()}
                  </td>

                  <td className="py-4 px-2">₹{course?.amount}</td>

                  {/* STATUS SELECT */}
                  <td className="py-4 px-2">
                    <select
                      className="px-3 py-1 rounded-full text-xs font-medium border-none outline-none"
                      value={courseStatus[course._id]}
                      onChange={(e) => {
                        const value = e.target.value;

                        setCourseStatus((prev) => ({
                          ...prev,
                          [course._id]: value,
                        }));

                        updateStatus(course);
                      }}
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                  </td>

                  <td className="py-4 px-2">{course?.category}</td>

                  <td className="py-4 px-2">
                    <div className="flex gap-2">
                      <button
                        className="p-1 cursor-pointer text-gray-400 hover:text-gray-300"
                        onClick={() =>
                          navigate(`/admin/course/${course._id}/add-chapter`)
                        }
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-2">
                    <div className="flex gap-2">
                      <button
                        className="p-1 cursor-pointer text-gray-400 hover:text-gray-300"
                        onClick={() => handleClick(course._id)}
                      >
                        <Trash className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
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
