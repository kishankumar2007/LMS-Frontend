import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, Search, Bell, User } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../../Api/authApi";
import toast from "react-hot-toast";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef(null);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Home", path: "/admin" },
    { name: "Add Course", path: "/admin/add-course" },
    { name: "My Courses", path: "/admin/courses" },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfile = () => setIsProfileOpen(!isProfileOpen);


  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setIsProfileOpen(false);
      }
    };

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
        setIsProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, []);


  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  const handleClick = async () => {
    try {
      const res = await logout();
      if (!res) throw Error("Logout failed")

      toast.success(res)
      navigate("/login")

    } catch (error) {
      toast.error(error.message)
      console.log(error.message)
    }
  }
  return (
    <nav className="bg-neutral-900 border-b border-neutral-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">


          <h1 className="text-white text-2xl font-bold">
            Ed. Tech
          </h1>


          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-neutral-300 hover:text-white px-3 py-2 rounded-lg font-medium hover:bg-neutral-800"
              >
                {item.name}
              </Link>
            ))}
          </div>


          <div className="hidden lg:flex items-center space-x-3">

            <button className="relative p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
            </button>


            <div className="relative" ref={profileRef}>
              <button
                onClick={toggleProfile}
                className="flex items-center space-x-2 p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-800"
              >
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg">
                  <Link to="/profile" className="block px-4 py-2 text-neutral-300 hover:bg-neutral-700">
                    Profile
                  </Link>
                  <Link to="/settings" className="block px-4 py-2 text-neutral-300 hover:bg-neutral-700">
                    Settings
                  </Link>
                  <hr className="border-neutral-700" />
                  <button onClick={() => handleClick()} className="w-full text-left px-4 py-2 text-red-400 hover:bg-neutral-700">
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden text-neutral-300 hover:text-white p-2"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden border-t border-neutral-700 py-3 space-y-2">

            {/* Search */}
            <div className="px-3">
              <div className="relative">
                <Search className="absolute left-3 top-2 w-4 h-4 text-neutral-500" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-10 pr-4 py-2 bg-neutral-800 border border-neutral-600 rounded-lg text-white outline-none"
                />
              </div>
            </div>

            {/* Links */}
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="block px-3 py-2 text-neutral-300 hover:bg-neutral-800 rounded-lg"
              >
                {link.name}
              </Link>
            ))}

            <button onClick={() => handleClick()} className="block w-full text-left px-3 py-2 text-red-400 hover:bg-neutral-800 rounded-lg">
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
