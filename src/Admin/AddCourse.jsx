import React, { useState } from "react";
import toast from "react-hot-toast";
import { createCourse } from "../Api/courseApi";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const [courseTitle, setCourseTitle] = useState("");
  const [description, setDescription] = useState("");
  const [avatar, setAvatar] = useState("");
  const [preview, setPreview] = useState("");
  const [instructor, setInstructor] = useState("");
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  const handleClick = async () => {
    try {
      setLoading(true)
      const res = await createCourse(courseTitle, description, avatar, instructor, amount, category);
      if (res) {
        toast.success(res.message)
        setLoading(false)
        navigate("/admin/courses")
      }
    } catch (error) {
      toast.error(error.message)
    }
    finally {setLoading(false) }
  };
  return (
    <div className="w-full min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">

        {/* Header */}
        <h1 className="text-white text-2xl md:text-3xl font-semibold">
          Add Course
        </h1>

        {/* Main Card */}
        <div className="bg-gray-900 rounded-xl p-4 md:p-6 grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* FORM SECTION */}
          <div className="flex flex-col gap-4">

            <input
              value={courseTitle}
              onChange={(e) => setCourseTitle(e.target.value)}
              className="w-full p-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              type="text"
              placeholder="Course title"
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full p-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/50 min-h-30 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none resize-none"
              placeholder="Course description"
            />

            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              type="number"
              placeholder="Price (₹)"
            />

            {/* Category + File */}
            <div className="flex flex-col sm:flex-row gap-4">
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full sm:w-1/2 p-3 rounded-lg bg-slate-900 border border-white/30 text-white focus:border-purple-500 outline-none"
              >
                <option value="">Select Category</option>
                <option value="Web Development">Web Development</option>
                <option value="DSA">DSA</option>
                <option value="Machine Learning">Machine Learning</option>
              </select>

              <input
                type="file"
                accept="image/*"
                className="w-full sm:w-1/2 text-white file:bg-purple-700 file:text-white file:border-0 file:px-4 file:py-2 file:rounded-lg cursor-pointer"
                onChange={(e) => {
                  setAvatar(e.target.files[0]);
                  setPreview(URL.createObjectURL(e.target.files[0]));
                }}
              />
            </div>

            <input
              value={instructor}
              onChange={(e) => setInstructor(e.target.value)}
              className="w-full p-3 rounded-lg bg-transparent border border-white/30 text-white placeholder-white/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
              type="text"
              placeholder="Instructor name"
            />

            <button
              onClick={handleClick}
              className="mt-2 py-3 w-full max-w-sm bg-purple-700 hover:bg-purple-800 transition rounded-lg text-white font-medium mx-auto"
            >
              {loading? "Please wait...":"Create Course"}
            </button>
          </div>

          {/* PREVIEW SECTION */}
          <div className="flex flex-col gap-3">
            <p className="text-white/70 text-sm">Course Thumbnail Preview</p>

            <div className="w-full aspect-square max-h-105 rounded-xl overflow-hidden bg-white flex items-center justify-center md:sticky md:top-6">
              {preview ? (
                <img
                  src={preview}
                  alt="Avatar preview"
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              ) : (
                <span className="text-gray-500 text-sm">No image selected</span>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AddCourse;
