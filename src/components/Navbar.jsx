import { ArrowRight, Menu, Sparkle, Star, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useUser } from '../context/UserContext'
import { logout } from '../Api/authApi'
import toast from 'react-hot-toast'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isProfileOpen, setIsProfileOpen] = useState(false)


    const { isLoggedIn, setIsLoggedIn, setUser, user } = useUser()

    const NavItems = [
        { name: 'Home', path: "/" },
        { name: 'All Courses', path: "/courses" },
        { name: "Categories", path: "/categories" },
        { name: "All Teachers", path: "/teachers" },
        { name: "My Courses", path: "/mycourses" }
    ]

    const navigate = useNavigate()


    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])


    const handleLogout = async () => {
        try {
            const response = await logout()
            if (!response) return

            toast.success(response)
            setUser(null)
            setIsLoggedIn(false)
            setIsProfileOpen(false)
            setIsMenuOpen(false)
        } catch (error) {
            toast.error(error.message)
        }
    }

    return (
        <div
            className={`lg:px-20 px-6 flex items-center justify-between w-full
      ${isScrolled ? "bg-transparent backdrop-blur-2xl" : "bg-transparent"}
      sm:h-16 h-14 fixed transition-all duration-300 left-0 right-0 top-0 z-50`}
        >
            {/* Logo */}
            <h1 className="bg-linear-to-r sm:text-3xl text-2xl font-black from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ed. Tech
            </h1>

            {/* Desktop Nav */}
            <ul className='hidden sm:flex lg:gap-8 gap-4 h-full items-center'>
                {NavItems.map((item, idx) => (
                    <NavLink
                        key={idx}
                        to={item.path}
                        className={({ isActive }) =>
                            `${isActive ? "text-white" : "text-zinc-300 hover:text-white"}
              transition duration-200 shrink-0`
                        }
                    >
                        <li>{item.name}</li>
                    </NavLink>
                ))}
            </ul>

            {/* Right Side */}
            <div className="flex items-center gap-3">


                {isLoggedIn ? (
                    <div className="relative hidden sm:block">
                        <button
                            onClick={() => setIsProfileOpen(prev => !prev)}
                            className="size-10 rounded-full overflow-hidden border border-white/5"
                        >
                            <img
                                src={user?.avatar}
                                alt="Profile"
                                className="h-full w-full object-cover"
                            />
                        </button>

                        {isProfileOpen && (
                            <div className="absolute right-0 top-full mt-2 w-40 bg-black/20 border border-white/10 rounded-md shadow-md">
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-center px-4 py-2 text-sm text-red-400 hover:bg-white/10 transition"
                                >
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={() => navigate("/login")}
                        className='hidden sm:flex text-zinc-300 gap-2 bg-linear-to-r from-cyan-400 to-purple-600 px-5 py-2 rounded-full items-center hover:scale-105 active:scale-95 transition'
                    >
                        Login
                        <ArrowRight className="w-4 h-4" />
                    </button>
                )}

                {isLoggedIn && (
                    <button
                    className='border-2 cursor-pointer border-cyan-600 bg-transparent text-xs sm:h-8 sm:px-4 px-2 text-zinc-300 rounded h-6 flex gap-2 items-center'
                        onClick={() =>navigate("/admin")}
                    >  Admin <Sparkle className='text-amber-400 animate-pulse' size={12} /></button>)}

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMenuOpen(prev => !prev)}
                    className="sm:hidden text-white"
                >
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-black/40 sm:hidden py-6 px-6 flex flex-col items-center space-y-4 shadow-md">
                    {NavItems.map((item, idx) => (
                        <NavLink
                            key={idx}
                            to={item.path}
                            onClick={() => setIsMenuOpen(false)}
                            className="text-white hover:text-cyan-300 transition"
                        >
                            {item.name}
                        </NavLink>
                    ))}

                    {isLoggedIn ? (
                        <button onClick={handleLogout} className="text-red-400">
                            Logout
                        </button>
                    ) : (
                        <button
                            onClick={() => {
                                navigate("/login")
                                setIsMenuOpen(false)
                            }}
                            className="text-white"
                        >
                            Login
                        </button>
                    )}
                </div>
            )}
        </div>
    )
}

export default Navbar
