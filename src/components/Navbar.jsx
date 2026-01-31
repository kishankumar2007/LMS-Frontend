import { ArrowRight } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { logout } from '../Api/authApi'
import toast from 'react-hot-toast'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const { isLoggedIn, setIsLoggedIn, setUser, user } = useUser()
    const NavItems = [{ name: 'Home', path: "/" }, { name: 'All Courses', path: "/courses" }, { name: "Categories", path: "/categories" }, { name: "All Teachers", path: "/teachers" }, { name: "My Courses", path: "/mycourses" }]
    const navigate = useNavigate()

    const handleScroll = () => {
        if (window.scrollY > 50) {
            setIsScrolled(true)
        } else {
            setIsScrolled(false)
        }
    }

    const handleClick = async () => {
        try {
            const response = await logout()

            if (!response) return
            toast.success(response)
            setUser(null)
            setIsLoggedIn(false)
        } catch (error) {
            toast.error(error.message)
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])

    return (
        <div className={`sm:px-20  px-6 flex items-center justify-between w-full ${isScrolled ? "bg-white/5" : "bg-transparent"}  sm:h-16 h-14 drop-shadow backdrop-blur-xs fixed transition-all ease-in duration-300 left-0 right-0 top-0 z-99`}>
            <h1 className="bg-linear-to-r sm:text-3xl text-2xl font-black from-cyan-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
                Ed. Tech
            </h1>

            <ul className='hidden sm:flex gap-8 h-full items-center'>
                {NavItems.map((item, idx) => (<NavLink key={idx} to={item.path} replace ><li className='text-zinc-300/80 hover:text-zinc-200 transition-all ease-in duration-75 hover:scale-105'>{item.name}</li> </NavLink>))}
            </ul>

            {
                isLoggedIn ?
                    <div onClick={handleClick} className="relative group size-12 rounded-full bg-white/5 border border-white/10">
                        <img
                            src={user?.avatar}
                            alt="Profile"
                            className="h-full w-full rounded-full object-cover"
                        />

                        <div
                            className=" absolute right-0 top-full  opacity-0 invisible group-hover:opacity-100 group-hover:visible  bg-white/10 border border-white/10 backdrop-blur-md rounded-md transition-all duration-200
                            mt-2
    "
                        >
                            <span className="block cursor-pointer px-4 py-2 text-sm text-zinc-300 whitespace-nowrap">
                                Logout
                            </span>
                        </div>
                    </div>

                    :
                    <button onClick={() => navigate("/login")} className='text-zinc-300 flex gap-2 bg-linear-to-r active:scale-95 hover:scale-105 transition-all ease-in duration-150 from-cyan-400 font-base drop-shadow to-purple-700 px-6 py-2 rounded-full items-center cursor-pointer'>Login

                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>}
        </div>
    )
}

export default Navbar