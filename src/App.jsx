import { useEffect } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'

const App = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [pathname])


  return (
    <>
      {pathname === "/login" || pathname === "/signup" ? "" : <Navbar />}
      <Outlet />
      {pathname === "/login" || pathname === "/signup" ? "" : <Footer />}
    </>
  )
}

export default App