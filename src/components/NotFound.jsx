import { TriangleAlert } from 'lucide-react'

const NotFound = ({message}) => {
  return (
    <div className='bg-linear-to-br from-slate-900 via-purple-800 to-slate-900 w-full min-h-screen flex items-center justify-center max-sm:text-2xl text-zinc-300 gap-2'>
        <TriangleAlert />{message}
    </div>
  )
}

export default NotFound