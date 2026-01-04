import React from 'react'
import Card from '../components/Card'
import { useCourse } from '../context/CourseContext'

const CoursesPage = () => {
    const { allCourses, setAllCourses } = useCourse()
    return (
        <div className='w-full pt-16 min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900'>
            <div className='max-w-7xl mx-auto px-4 py-10 flex flex-wrap gap-6 mb-2 '>
                {allCourses?.map((course, idx) => (
                    <Card key={idx} course={course} />
                ))}
            </div>
        </div>
    )
}

export default CoursesPage