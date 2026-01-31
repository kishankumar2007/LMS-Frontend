import { useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { useUser } from './context/UserContext'
import toast, { Toaster } from 'react-hot-toast'
import { getProfile, myCourses } from './Api/userApi'
import { CourseContextProvider, useCourse } from './context/CourseContext'
import { allCourse } from './Api/courseApi'

const App = () => {
  const { pathname } = useLocation()
  const { isLoggedIn, setIsLoggedIn, setUser, setUserCourse } = useUser()
  const { allCourses, setAllCourses } = useCourse()


  const fetchAllCourses = async () => {
    try {
      const courses = await allCourse()
      if (!courses) throw Error("Course fetch failed")

      setAllCourses(courses)

    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])


  useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = await getProfile()
        if (user) {
          const userCourse = await myCourses()

          setIsLoggedIn(true)
          setUser(user)
          setUserCourse(userCourse)
        }
      } catch (error) {
        console.log(error.message)
      }
    }
    if (!isLoggedIn) {
      fetchUser()
    }

    if (allCourses.length === 0) {
      fetchAllCourses()
    }

  }, [isLoggedIn])



  return (
    <>      <Toaster toastOptions={{
      duration: 1500,
      style: {
        height: 40,
        maxWidth: 250,
        fontSize: 14
      }
    }} />
      {pathname === "/login" || pathname === "/signup" ? null : <Navbar />}
      <Outlet />
      {pathname === "/login" || pathname === "/signup" ? null : <Footer />}
    </>

  )
}

export default App