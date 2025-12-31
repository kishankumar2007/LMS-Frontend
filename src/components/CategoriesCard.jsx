import { ArrowRight, VerifiedIcon } from 'lucide-react'

const CategoriesCard = ({ className, data }) => {

  return (
    <div
      style={{ animation: "slideInFromBottom 0.7s ease-in" }}
      className={`max-w-96 w-full max-h-96 h-full bg-white/5 border border-white/10 rounded-lg p-4 space-y-3 backdrop-blur-2xl ${className}`}>

      <div className='h-40 w-full border border-white/10 rounded-md overflow-hidden'>
        <img
          loading='lazy'
          decoding='async'
          className='hover:scale-110 transition-transform ease-in duration-300'
          src={data?.thumbnail}
          alt="" />
      </div>

      <div className='text-start px-2 w-full'>
        <h1 className='text-2xl text-zinc-300 capitalize font-semibold'>{data?.title}</h1>
        <p className='text-sm text-gray-400 line-clamp-2 w-full mb-2'>{data?.description}</p>
      </div>

      <div className='flex flex-col gap-2 px-2'>
        {data.highlights.map((item, idx) => (
          <h1 key={idx} className='text-xs text-slate-400 flex gap-4'><VerifiedIcon className='text-amber-400 ' size={16} /> <span>{item}</span></h1>
        ))}
      </div>

      <div className='relative flex items-center w-full justify-between px-2'>
        <h1 className='text-zinc-300'>{data.totalCourses} Courses</h1>
        <button className='absolute right-0 bottom-0 shrink-0 flex gap-2 items-center  px-4 text-amber-400 font-semibold cursor-pointer'>Explore <ArrowRight size={12} /></button>
      </div>
    </div>
  )
}

export default CategoriesCard