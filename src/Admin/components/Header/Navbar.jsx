import { useState } from "react";
import { Menu, X, ChevronDown, Search, Bell, User } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfile = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const navLinks = [
    { name: "Home", path: "/admin" },
    { name: "Add Course", path: "/admin/add-course" },
    { name: "My Courses", path: "/admin/courses" },
  ];

  return (
    <nav className="bg-neutral-900 border-b border-neutral-700 sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="shrink-0">
            <h1 className="text-transparent bg-clip-text bg-linear-to-br from-gray-500 via-white/20 to-gray-500 text-3xl font-black animate-pulse">Ed. Tech</h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((item) => (
              <Link
                className="text-neutral-300 hover:text-white px-3 py-2 rounded-lg font-medium transition-colors duration-200 hover:bg-neutral-800"
                to={item.path}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center space-x-4">

            {/* Notifications */}
            <button className="relative p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors duration-200">
              <Bell className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProfile}
                className="flex items-center space-x-2 p-2 text-neutral-300 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors duration-200"
              >
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <User className="w-4 h-4 text-white" />
                </div>
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Profile Dropdown Menu */}
              {isProfileOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-neutral-800 border border-neutral-700 rounded-lg shadow-lg py-1">
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors duration-200"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors duration-200"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors duration-200"
                  >
                    Dashboard
                  </a>
                  <hr className="border-neutral-700 my-1" />
                  <a
                    href="#"
                    className="block px-4 py-2 text-neutral-300 hover:text-white hover:bg-neutral-700 transition-colors duration-200"
                  >
                    Sign Out
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-neutral-300 hover:text-white p-2 rounded-lg transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-neutral-700">
              {/* Mobile Search */}
              <div className="px-3 py-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-neutral-500" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2 bg-neutral-800 border border-neutral-600 rounded-lg text-white placeholder-neutral-500 outline-none focus:border-orange-500 transition-colors duration-200"
                  />
                </div>
              </div>

              {/* Mobile Navigation Links */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-neutral-300 hover:text-white hover:bg-neutral-800 px-3 py-2 rounded-lg font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}

              {/* Mobile Profile Section */}
              <div className="border-t border-neutral-700 pt-3 mt-3">
                <div className="flex items-center px-3 py-2 space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <User className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-medium">John Doe</p>
                    <p className="text-neutral-400 text-sm">john@example.com</p>
                  </div>
                  <button className="relative text-neutral-400 hover:text-white">
                    <Bell className="w-5 h-5" />
                    <span className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full"></span>
                  </button>
                </div>

                <div className="mt-2 space-y-1">
                  <a
                    href="#"
                    className="block text-neutral-300 hover:text-white hover:bg-neutral-800 px-3 py-2 rounded-lg transition-colors duration-200"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block text-neutral-300 hover:text-white hover:bg-neutral-800 px-3 py-2 rounded-lg transition-colors duration-200"
                  >
                    Settings
                  </a>
                  <a
                    href="#"
                    className="block text-neutral-300 hover:text-white hover:bg-neutral-800 px-3 py-2 rounded-lg transition-colors duration-200"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#"
                    className="block text-neutral-300 hover:text-white hover:bg-neutral-800 px-3 py-2 rounded-lg transition-colors duration-200"
                  >
                    Sign Out
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
