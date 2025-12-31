import React from 'react'

const TeacherNanoCard = ({item }) => {
  return (
    <div style={{ animation: "slideInFromBottom 0.7s ease-in" }} className={`max-w-lg w-full h-40 bg-white/5 border border-white/10 rounded-lg flex items-center gap-6 px-4 overflow-hidden hover:scale-105 hover:border-white/20 transition-transform ease-in duration-300 drop-shadow-2xl backdrop-blur-2xl shadow-md hover:shadow-purple-500/30 shrink-0`}>

      <div className='size-24 border shrink-0 border-white/10 rounded-full overflow-hidden'>
        <img
          loading='lazy'
          decoding='async'
          className='hover:scale-110 transition-transform ease-in duration-300 object-cover h-full w-auto'
          src={item?.profileLink} alt="" />
      </div>

      <div className='space-y-2'>
        <h1 className='text-white text-xl font-semibold'>{item?.name || "Apna Collage"}</h1>
        <h1 className='text-zinc-100 text-md'>{item?.totalCourses} <span className='text-gray-400 text-xs font-semibold'>Courses</span></h1>

        <ul className='hidden sm:flex gap-6 w-full flex-wrap leading-none '>
          {item?.categories?.map((e, idx) => (
            <li key={idx} className='text-white text-xs tracking-wider'>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default TeacherNanoCard