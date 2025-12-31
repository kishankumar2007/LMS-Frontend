import { ArrowRight } from 'lucide-react'
import React from 'react'

const TeacherCard = ({ data }) => {

    return (
        <div style={{ animation: "slideInFromBottom 0.3s ease-in" }} className='relative max-w-86 w-full bg-white/5 border border-white/10 h-96 p-4 rounded-lg'>

            <div className='flex items-center gap-6'>

                <div className='size-20 shrink-0 bg-white/5 border border-white/10 rounded-full overflow-hidden'>
                    <img

                        className='hover:scale-110 transition-transform ease-in duration-300 object-cover h-full w-full'
                        src={data?.profileLink} alt='' />
                </div>

                <div className="flex flex-col">
                    <h1 className='text-zinc-300 font-bold text-2xl'>{data?.name}</h1>

                    <span className='text-gray-400 text-xs font-semibold'>Frontend Developer & Javascript</span>

                    <span className='text-gray-400 text-xs font-semibold'>
                        {data.totalCourses} courses | {data.experience}
                    </span>
                </div>
            </div>

            <div className='flex flex-col px-2 mt-2'>
                <p className="text-zinc-300 text-xs w-full line-clamp-3 px-2 mb-2">
                    {data.description}
                </p>

                <div className="flex gap-2 items-center mt-2 flex-wrap">
                    {data?.skills.map(((item, idx) => (
                        <span key={idx} className='text-xs bg-black/10 border border-white/10 text-zinc-400 py-1 px-2 rounded-full '>{item}</span>
                    )))}

                </div>
            </div>

            <div className='mt-5 px-2'>
                <h1 className='uppercase text-gray-300 font-semibold mb-2'>Categories</h1>

                <div className='flex gap-2 items-center w-full flex-wrap shrink-0'>
                    {data?.categories.map(((item, idx) => (
                        <span key={idx} className='text-xs bg-black/10 border border-white/10 text-zinc-400 py-1 px-2 rounded-full '>{item}</span>
                    )))}
                </div>
                <div>

                </div>
            </div>

            <span className='absolute bottom-5 right-5 flex text-cyan-500 gap-2 items-center mt-4 pl-2 font-semibold cursor-pointer'> View Profile <ArrowRight size={16} /></span>
        </div>
    )
}

export default TeacherCard