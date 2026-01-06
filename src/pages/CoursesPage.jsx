import Card from '../components/Card'
import { useCourse } from '../context/CourseContext'
import { useSearchParams } from 'react-router-dom'

const CoursesPage = () => {
    const { allCourses } = useCourse()
    const [searchParams] = useSearchParams()
    const category = searchParams.get("category")

    console.log(category)
    return (
        <div className='w-full pt-16 min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900'>
            <div className='max-w-7xl mx-auto px-4 py-10 flex flex-wrap gap-6 mb-2 '>
               {!category 
               ? 
                allCourses?.map((course, idx) => (
                    <Card key={idx} course={course} />
                )): 
                allCourses?.map((course, idx) => (
                    course.category == category && <Card key={idx} course={course} />
                ))}
            </div>
        </div>
    )
}

export default CoursesPage