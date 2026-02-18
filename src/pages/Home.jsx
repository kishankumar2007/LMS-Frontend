
import { useState, useEffect } from "react"
import { Play, ArrowRight, CheckCircle, Sparkles, Zap, Globe, Users, TrendingUp, Star, Award, BookOpen, Code2, ArrowUp } from "lucide-react"
import { useNavigate } from "react-router-dom"
import TeacherNanoCard from "../components/TeacherNanoCard"
import { teachers } from "../utils/constant"


export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isLoaded, setIsLoaded] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const navigate = useNavigate()



  const handleScroll = () => {
    if (window.scrollY > 1000) {
      setIsScrolled(true)
    } else {
      setIsScrolled(false)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const features = [
    {
      icon: Code2,
      title: "Interactive Learning",
      description: "Learn by doing with hands-on coding exercises",
      color: "from-blue-500 to-cyan-400",
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Get guidance from industry professionals",
      color: "from-purple-500 to-pink-400",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn recognized certificates upon completion",
      color: "from-green-500 to-emerald-400",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Advance your career with in-demand skills",
      color: "from-orange-500 to-red-400",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Software Engineer at Google",
      content: "Ed. Tech transformed my career. The practical approach helped me land my dream job.",
      rating: 5,
      avatar: "👩‍💻",
    },
    {
      name: "Raj Patel",
      role: "Full Stack Developer",
      content: "Best investment I made. The mentorship program is incredible.",
      rating: 5,
      avatar: "👨‍💻",
    },
    {
      name: "Emily Johnson",
      role: "Frontend Developer",
      content: "From zero to hero in 6 months. Highly recommend Ed. Tech!",
      rating: 5,
      avatar: "👩‍🎨",
    },
  ]

  const stats = [
    { number: "100K+", label: "Students Enrolled", icon: Users },
    { number: "500+", label: "Courses Available", icon: BookOpen },
    { number: "98%", label: "Success Rate", icon: TrendingUp },
    { number: "50+", label: "Countries", icon: Globe },
  ]

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length)
    }, 3000)
    window.addEventListener("scroll", handleScroll)
    return () => {
      clearInterval(interval)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <div
      className="relative min-h-screen pt-16 bg-linear-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
      onMouseMove={handleMouseMove}
    >

      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)",
            backgroundSize: "50px 50px",
          }}
        >

        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0">
        <div
          className="absolute w-96 h-96 bg-linear-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"
          style={{
            top: "10%",
            left: "10%",
            transform: "translate(" + mousePosition.x * 0.02 + "px, " + mousePosition.y * 0.02 + "px)",
          }}
        ></div>
        <div
          className="absolute w-80 h-80 bg-linear-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{
            bottom: "20%",
            right: "15%",
            transform: "translate(" + mousePosition.x * -0.01 + "px, " + mousePosition.y * -0.01 + "px)",
          }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-linear-to-r from-green-500/25 to-cyan-500/25 rounded-full blur-3xl animate-pulse delay-2000"
          style={{
            top: "60%",
            left: "70%",
            transform: "translate(" + mousePosition.x * 0.015 + "px, " + mousePosition.y * 0.015 + "px)",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div
          className={
            "text-center mb-16 transition-all duration-1000 " +
            (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
          }
        >
          <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-yellow-400 mr-2 animate-spin" />
            <span className="text-white font-semibold max-sm:text-xs">✨ Transform Your Future with Code</span>
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Code Your Way to
            <span className="block bg-linear-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
              Success
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed">
            Join thousands of developers who've transformed their careers with our comprehensive, project-based coding
            bootcamp. Learn from industry experts and build real applications.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button onClick={() => navigate("/courses")} className="group relative px-12 py-5 bg-linear-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 flex items-center space-x-3">
              <span>Start Learning Today</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-linear-to-r from-cyan-400 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10"></div>
            </button>

            <button
              className="group flex items-center space-x-3 px-8 py-5 bg-white/10 backdrop-blur-md border border-white/20 hover:border-white/40 text-white font-semibold text-lg rounded-2xl transition-all duration-300 hover:bg-white/20"
            >
              <div className="w-12 h-12 bg-linear-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="w-5 h-5 text-white ml-0.5 animate-pulse" />
              </div>
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>No Experience Required</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Job Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-400" />
              <span>Lifetime Access</span>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          className={
            "grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-300 " +
            (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
          }
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group text-center p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:scale-105"
            >
              <div className="w-16 h-16 bg-linear-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-black text-white mb-2">{stat.number}</div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Expert Teachers Section */}
        <div className="mt-4 space-y-4 flex flex-col items-center">
          <h1 className="text-zinc-100 text-4xl font-semibold text-center">Meet Your Expert Teachers</h1>
          <p className="max-w-2xl text-center text-base text-gray-200 ">Learn from industry experts and experienced instructors who have helped thousands of students achieve their career goals</p>
          <div className="flex flex-wrap gap-4 items-center justify-center m-12">
            {teachers.map((item, idx) => <TeacherNanoCard key={idx} item={item} />)}
          </div>
        </div>
        {/* Features Section */}
        <div
          id="about"
          className={
            "mb-20 transition-all duration-1000 delay-500 " +
            (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
          }
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose{" "}
              <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Ed. Tech
              </span>
              ?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the most effective way to learn programming with our proven methodology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className={
                  "group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-500 cursor-pointer " +
                  (activeFeature === index ? "border-white/30 bg-white/10" : "")
                }
                onClick={() => setActiveFeature(index)}
              >
                <div
                  className={
                    "w-16 h-16 bg-linear-to-r " +
                    feature.color +
                    " rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  }
                >
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Section */}
        <div
          className={
            "mb-20 transition-all duration-1000 delay-700 " +
            (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
          }
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Success{" "}
              <span className="bg-linear-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Stories
              </span>
            </h2>
            <p className="text-xl text-gray-300">Hear from our graduates who landed their dream jobs</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center space-x-4">
                  <div className="text-3xl">{testimonial.avatar}</div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-gray-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Final CTA Section */}
        <div
          id="contact"
          className={
            "text-center py-16 transition-all duration-1000 delay-900 " +
            (isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10")
          }
        >
          <div className="bg-linear-to-r from-cyan-500/10 to-purple-600/10 backdrop-blur-md border border-white/20 rounded-3xl p-12 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-yellow-400 mr-3 animate-bounce" />
              <span className="text-2xl font-bold text-white">Limited Time Offer</span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Coding Journey Today</h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our next cohort and get 50% off your first month. Transform your career in just 12 weeks with our
              intensive bootcamp.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group relative px-12 py-5 bg-linear-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold text-xl rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 hover:scale-105 flex items-center space-x-3">
                <span>Enroll Now - 50% Off</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

              <div className="text-center">
                <div className="text-2xl font-bold text-white">
                  ₹199/-<span className="text-lg text-gray-400 line-through ml-2">₹499/-</span>
                </div>
                <div className="text-sm text-gray-400">one time payment</div>
              </div>
            </div>

            <div className="flex justify-center items-center mt-8 space-x-8 text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>30-day money back</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isScrolled &&
        <div className="fixed bottom-8 right-8 z-20">
          <button
            onClick={scrollTop}
            className="group w-16 h-16 bg-linear-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full flex items-center justify-center shadow-2xl hover:shadow-cyan-500/25 transition-all duration-300 hover:scale-110"
          >
            <ArrowUp className="w-6 h-6 text-white ml-0.5 group-hover:scale-110 transition-transform duration-300" />
          </button>
        </div>
      }
    </div>
  )
}
