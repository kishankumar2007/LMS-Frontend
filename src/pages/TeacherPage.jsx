import TeacherCard from '../components/TeacherCard'
import { teachers } from '../utils/constant'

const TeacherPage = () => {
    return (
        <div className='w-full min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 pt-16'>
            <div className='max-w-7xl w-full h-full p-2 mx-auto flex flex-col items-center gap-12'>
                <div className='text-center space-y-4 mt-8'>
                    <h1 className='text-4xl text-zinc-300 font-black'>Meet All Our Instructors</h1>
                    <p className='max-w-xl text-gray-400 text-base'>Learn from industry experts with real-world experience across system design, web development, data science, programming, and more.</p>
                </div>

                <div className='w-full h-full md:grid gap-4 md:grid-cols-3  place-items-center px-2 flex flex-wrap justify-center overflow-hidden'>
                    {teachers.map((data,idx) => <TeacherCard key={idx} data={data}/>)}
                </div>




            </div>
        </div>
    )
}

export default TeacherPage