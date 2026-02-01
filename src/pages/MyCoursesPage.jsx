import { useUser } from "../context/UserContext"
import EnrolledCourseCard from '../components/EnrolledCourseCard'
import { useEffect } from "react"
import { myCourses } from "../Api/userApi"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"

const MyCoursesPage = () => {

    const { userCourse, setUserCourse } = useUser()
    const navigate = useNavigate()

    const fetchMyCourses = async () => {
        try {
            const courses = await myCourses()
            if (courses) {
                setUserCourse(courses)
            }
        } catch (error) {
            toast.error(error.message)
            navigate("/login")
        }
    }

    useEffect(() => {
        if(!userCourse){
            fetchMyCourses()
        }

    }, [])
    return (
        <div className='min-h-screen space-y-4 w-full bg-linear-to-br from-slate-900 via-purple-900 pt-20 to-slate-900'>
            <h1 className='text-center text-3xl text-zinc-300 font-semibold mt-8'>My Courses</h1>
            <div className='max-w-6xl mx-auto grid md:grid-cols-3 place-items-center gap-2 p-2'>
                {userCourse?.map((course, idx) => (
                    <EnrolledCourseCard key={idx} course={course} />
                ))}
            </div>
        </div>
    )
}

export default MyCoursesPage