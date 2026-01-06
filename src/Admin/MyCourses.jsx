import { Edit } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useAdmin } from "../context/AdminContext";
import { adminCourses } from "../Api/courseApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const MyCourses = () => {
  const { myCourses, setMyCourses } = useAdmin();
  const [selected, setSelected] = useState('');

  const navigate = useNavigate()


  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await adminCourses();
        if (res) {
          setMyCourses(res);
          console.log(myCourses);
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
                <th className="text-left py-3 px-2">Action</th>
              </tr>
            </thead>
            {myCourses.map((course, idx) => (
              <tbody>
                <tr className="border-b border-gray-800 text-gray-400">
                  <td className="py-4 px-2 font-medium">{idx +1}</td>
                  <td className="py-4 px-2">{course?.name}</td>
                  <td className="py-4 px-2 text-gray-400">
                    {new Date(course?.createdAt).toDateString()}
                  </td>
                  <td className="py-4 px-2">₹{course?.amount}</td>
                  <td className="py-4 px-2">
                    <select
                      className={
                        "px-3 py-1 rounded-full text-xs font-medium border-none outline-none"
                      }
                      value={selected}
                      onChange={() => (
                        course?.isPublic ? setSelected("Public") : setSelected("Private")
                      )}
                    >
                      <option value="public">Public</option>
                      <option value="private">Private</option>
                    </select>
                  </td>
                  <td>{course?.category}</td>
                  <td className="py-4 px-2">
                    <div className="flex gap-2">
                      <button className="p-1 cursor-pointer text-gray-400 hover:text-gray-300">
                        <Edit onClick={() => navigate(`/admin/course/${course?._id}/add-chapter`)} className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyCourses;
