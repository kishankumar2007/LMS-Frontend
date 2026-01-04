import { User } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignupPage = () => {
    const [fullName, setFullName] = useState('')
    const [Email, setEmail] = useState('')
    const [Password, setPassword] = useState('')
    return (


        <div className='w-full min-h-screen bg-linear-to-br from-slate-900 via-purple-900 to-slate-900  flex justify-center items-center'>
            <div style={{ animation: "slideInFromBottom 1s ease-out" }} className='flex max-w-md w-full items-center px-6 py-8 flex-col justify-center bg-black/15 hover:bg-black/20  border border-white/10 backdrop-blur-2xl drop-shadow-2xl rounded-lg'>


                <div className="flex flex-col items-center space-y-4">
                    <div className='bg-linear-to-r p-2 hover:scale-110 transition-transform ease-in duration-200 rounded-lg from-cyan-500 to-purple-600'>
                        <User className='text-white' strokeWidth={1.5} />
                    </div>
                    <h1 className="text-2xl font-bold text-zinc-300">Create Account </h1>
                    <span className='text-gray-400 text-sm'>Join us today and start your journey</span>
                </div>


                <form className='flex flex-col  w-full h-fit py-4 px-4 space-y-2 mt-4'>
                    <label className='text-gray-400 text-sm' htmlFor="fullName">
                        Full Name
                    </label>
                    <input className='w-full py-2 px-4 text-zinc-300 border outline-none rounded bg-white/5 border-white/10 backdrop-blur-md placeholder:text-sm placeholder:tracking-wide focus:border-2 focus:border-purple-600 ' type="text" name="fullName" placeholder='Jhon Doe' required />


                    <label className='text-gray-400 text-sm' htmlFor="fullName">
                        Email
                    </label>
                    <input className='w-full py-2 px-4 text-zinc-300 border outline-none rounded bg-white/5 border-white/10 backdrop-blur-md placeholder:text-sm placeholder:tracking-wide focus:border-2 focus:border-purple-600 ' type="email" name="fullName" placeholder='jhon@gmail.com' required />


                    <label className='text-gray-400 text-sm' htmlFor="fullName">
                        Password
                    </label>
                    <input className='w-full py-2 px-4 text-zinc-300 border outline-none rounded bg-white/5 border-white/10 backdrop-blur-md placeholder:tracking-widest placeholder:text-md focus:border-2 focus:border-purple-600 ' type="password" name="fullName" placeholder='********' required />

                    <button className='hover:scale-105 transition-all duration-400 active:scale-95 hover:from-cyan-600 hover:to-purple-700 bg-linear-to-r from-cyan-500 to-purple-600 py-2 px-4 rounded-lg text-zinc-300 mt-4 hover:text-white' type='submit'> Signup</button>

                    <p className='text-center text-zinc-400 mt-4'>Already have an account ?? <Link className='hover:text-purple-800 text-purple-600 font-bold' to="/login">Login</Link></p>
                </form>
            </div>

        </div>
    )
}

export default SignupPage