
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { useCourse } from "../context/CourseContext"
import { getChapter } from "../Api/chapterApi"
import toast from "react-hot-toast"
import Chapter from "../components/Chapter"

export default function ProductDetailsPage() {

    const { _id } = useParams()
    const { allCourses, chapters, setChapters } = useCourse()
    const [course] = allCourses?.filter(course => course._id == _id)

    const fetchChapters = async () => {
        try {
            const courseChapters = await getChapter(_id)

            if (!courseChapters) return
            setChapters(courseChapters)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
         fetchChapters()
    }, [_id])

    return (
        <div className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 pt-16 min-h-screen">

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                    {/* Product Images */}
                    <div className="space-y-4">
                        {/* Main Image */}
                        <div className="relative bg-linear-to-t from-black/20 to-transparent rounded-2xl overflow-hidden group">
                            <img
                                src={course?.avatar}
                                alt="Premium Wireless Headphones Pro"
                                className="w-full h-96 sm:h-125 object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                            {/* Sale Badge */}
                            <div className="absolute top-4 left-4">
                                <span className="bg-linear-to-r from-cyan-500 to-purple-600 text-white px-4 py-2  rounded-full sm:text-sm text-xs font-semibold">
                                    {course?.category}
                                </span>
                            </div>
                        </div>

                    </div>

                    {/* Product Information */}
                    <div className="space-y-6">
                        {/* Product Title and Rating */}
                        <div>
                            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{course?.name}</h1>

                            {/* Rating and Reviews */}
                            <div className="flex items-center space-x-4 mb-4">
                                <div className="flex items-center">
                                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span className="text-white font-semibold ml-2">4.8</span>
                                </div>
                                <span className="text-gray-400">|</span>
                                <a href="#reviews" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                                    2,847 Reviews
                                </a>
                            </div>
                        </div>

                        {/* Price */}
                        <div className="bg-linear-to-tl from-black/15 to-black/20 rounded-xl p-6">
                            <div className="flex items-center space-x-4 mb-4">
                                <span className="sm:text-4xl font-bold text-white">{course?.amount}</span>
                                <span className="sm:text-2xl text-gray-500 line-through">₹6999/-</span>
                                <span className="bg-linear-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                    Save ₹6799/-
                                </span>
                            </div>
                            <div className="text-gray-400 text-sm">Life time access to course</div>
                        </div>

                        {/* Product Description */}
                        <div>
                            <h3 className="text-xl font-semibold text-white mb-3">Description</h3>
                            <p className="text-gray-300 leading-relaxed">
                                {course?.description}
                            </p>
                        </div>


                        {/* Action Buttons */}
                        <div className="space-y-4">
                            <button className="w-full active:scale-95 bg-linear-to-r from-cyan-500 to-purple-600 text-white  font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                                Buy Now
                            </button>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/50">
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-400">Permanet Access</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z" />
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-400">Free Shipping</p>
                            </div>
                            <div className="text-center">
                                <div className="w-12 h-12 bg-white/10 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-2">
                                    <svg className="w-6 h-6 text-cyan-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path
                                            fillRule="evenodd"
                                            d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <p className="text-xs text-gray-400">Non-returnable</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Section Header */}
                <div className="text-center m-12 text-white">
                    <h2 className="text-3xl sm:text-5xl font-light tracking-tight">
                        What you'll Learn
                    </h2>
                </div>

                {/* Course Details */}

                {chapters?.map((chapter, idx) => (
                    <Chapter key={idx} chapter={chapter} />
                ))}


            </div>

            <div className="mt-12 text-center max-w-4xl w-full mx-auto px-2">
                <div className="bg-white/2 backdrop-blur-sm rounded-2xl border border-white/8 p-8">
                    <h3 className="text-2xl font-light mb-3 text-white">Still have questions?</h3>
                    <p className="text-gray-400 font-light mb-6 max-w-xl mx-auto">
                        Our team is here to provide personalized assistance for any specific questions.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                        <button className="bg-white text-black px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-gray-100">
                            Contact Support
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
