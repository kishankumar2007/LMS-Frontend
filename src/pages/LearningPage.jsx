import { useParams } from 'react-router-dom'
import { useUser } from "../context/UserContext"
import { useCourse } from '../context/CourseContext'
import Chapter from '../components/Chapter'
import toast from 'react-hot-toast'
import { getChapter } from '../Api/chapterApi'
import { useEffect } from 'react'

const LearningPage = () => {
    const { courseId } = useParams()
    const { userCourse } = useUser()
    const { chapters, setChapters } = useCourse()
    const course = userCourse?.filter(course => course.courseId === courseId)

    const fetchChapters = async () => {
        try {
            const res = await getChapter(courseId)
            setChapters(res)

        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {
        fetchChapters()
    }, [])

    return (
        <div className="bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 pt-8 min-h-screen">

            <div className='w-full lg:grid flex flex-wrap grid-cols-4 gap-4  mt-16 place-items-center px-4'>
                <div className='w-full col-span-3  aspect-video bg-black/10 rounded overflow-hidden '>
                    <iframe
                        width="100%"
                        height="100% "
                        allow="encrypted-media;"
                        allowFullScreen
                        src="https://player.cloudinary.com/embed/?cloud_name=kishan-kumar-2007&public_id=01._Path_to_Placement_rf8hqf&profile=cld-adaptive-stream"></iframe>
                </div>

                <div className='w-full lg:h-155 rounded bg-black/15 border border-white/10 py-4 overflow-y-scroll'>
                    {chapters?.map((chapter, idx) => (
                        <Chapter key={idx} chapter={chapter} />
                    ))}
                </div>
            </div>

        </div>

    )
}

export default LearningPage