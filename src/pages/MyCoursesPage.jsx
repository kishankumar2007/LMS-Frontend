import { useUser } from "../context/UserContext"
import EnrolledCourseCard from '../components/EnrolledCourseCard'
import { useEffect, useState } from "react"
import { myCourses } from "../Api/userApi"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import NotFound from "../components/NotFound"

const MyCoursesPage = () => {

    const { userCourse, setUserCourse } = useUser()
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()

    const fetchMyCourses = async () => {
        try {
            setLoading(true)
            setError(null)
            const courses = await myCourses()
            if (courses) {
                setUserCourse(courses)
                setLoading(false)
            }
        } catch (error) {
            toast.error(error.message)
            navigate("/login")
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (!userCourse) {
            fetchMyCourses()
        }

    }, [])

        if(userCourse?.length === 0){
            return(
                <NotFound message="You haven't purchased any course yet!" />
            )
        }
    return (
        <>
            {loading ?
                < div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-700 to-slate-900 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border-4 border-b-transparent border-t-white border-l-white border-r-white animate-spin"></div>
                </div >

                :
                <div className='min-h-screen space-y-4 w-full bg-linear-to-br from-slate-900 via-purple-900 pt-20 to-slate-900'>
                    <h1 className='text-center text-3xl text-zinc-300 font-semibold mt-8'>My Courses</h1>
                    <div className='max-w-6xl mx-auto grid md:grid-cols-3 place-items-center gap-2 p-2'>
                        {userCourse?.map((course, idx) => (
                            <EnrolledCourseCard key={idx} course={course} />
                        ))}
                    </div>
                </div>
            }
        </>
    )
}

export default MyCoursesPage