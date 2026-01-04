import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home.jsx'
import CoursesPage from './pages/CoursesPage.jsx'
import LoginPage from './pages/LoginPage.jsx'
import SignupPage from './pages/SignupPage.jsx'
import CategoriesPage from './pages/CategoriesPage.jsx'
import TeacherPage from "./pages/TeacherPage.jsx"
import { UserContextProvider } from './context/UserContext.jsx'
import ProductDetailsPage from './pages/ProductDetailsPage.jsx'
import { CourseContextProvider } from './context/CourseContext.jsx'
import MyCoursesPage from './pages/MyCoursesPage.jsx'
import LearningPage from './pages/LearningPage.jsx'

createRoot(document.getElementById('root')).render(
  <UserContextProvider>
    <CourseContextProvider>

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='login' element={<LoginPage />} />
            <Route path='signup' element={<SignupPage />} />
            <Route index element={<Home />} />
            <Route path="categories" element={<CategoriesPage />} />
            <Route path="teachers" element={<TeacherPage />} />
            < Route path='courses' element={<CoursesPage />} />
            < Route path='mycourses' element={<MyCoursesPage />} />
            < Route path='course/learning/:courseId' element={<LearningPage />} />
            <Route path='product-details/:name/:_id' element={<ProductDetailsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CourseContextProvider>

  </UserContextProvider>

)
