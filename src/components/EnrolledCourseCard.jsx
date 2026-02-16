import { Star } from "lucide-react"
import { useNavigate } from "react-router-dom"

const EnrolledCourseCard = ({ course }) => {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(`/course/learning/${course.courseId}`)} className='max-w-72 h-72 w-full p-2 space-y-4 rounded-lg bg-white/5 border border-white/10'>
            <div className='w-full border-white/10 h-42 rounded overflow-hidden'>
                <img src={course.avatar} alt="" />
            </div>
            <div className="px-2">
                <h1 className='text-white text-xl'>{course?.courseName}</h1>

                <div className="flex px-2 justify-between mt-4">
                    <span className="text-gray-400 text-xs">{course.instructor}</span>

                    <div className="flex text-transparent gap-1.5">
                        {[1, 2, 3, 4, 5].map((_, idx) => (
                            <Star key={idx} size={16} fill="gold" />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default EnrolledCourseCard