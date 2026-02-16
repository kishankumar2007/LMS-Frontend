import { TriangleAlert } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const NotFound = ({ message = "Page not found" }) => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen w-full bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center px-4">


      <div className="w-full max-w-md bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center shadow-lg">


        <div className="flex justify-center mb-4">
          <TriangleAlert className="w-12 h-12 text-red-400" />
        </div>


        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          Oops!
        </h1>


        <p className="text-zinc-300 mb-6">
          {message}
        </p>

        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 rounded-lg bg-linear-to-r from-cyan-400 to-purple-600 text-white font-medium hover:scale-105 active:scale-95 transition"
        >
          Go Home
        </button>
      </div>
    </div>
  )
}

export default NotFound
