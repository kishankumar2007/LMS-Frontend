import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import CoursesPage from "./pages/CoursesPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignupPage from "./pages/SignupPage.jsx";
import CategoriesPage from "./pages/CategoriesPage.jsx";
import TeacherPage from "./pages/TeacherPage.jsx";
import { UserContextProvider } from "./context/UserContext.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import { CourseContextProvider } from "./context/CourseContext.jsx";
import MyCoursesPage from "./pages/MyCoursesPage.jsx";
import LearningPage from "./pages/LearningPage.jsx";
import AdminDashboard from "./Admin/AdminDashboard.jsx";
import AddCourse from "./Admin/AddCourse.jsx";
import Layout from "./Admin/Layout.jsx";
import MyCourses from "./Admin/MyCourses.jsx";
import { AdminContextProvider } from "./context/AdminContext.jsx";
import AuthLayout from "./layout/AuthLayout.jsx"
import AddChapter from "./Admin/AddChapter.jsx";
import AdminAuthLayout from "./layout/AdminAuthLayout.jsx";
import NotFound from "./components/NotFound.jsx";

createRoot(document.getElementById("root")).render(
  <UserContextProvider>

    <CourseContextProvider>

      <AdminContextProvider>

        <BrowserRouter>

          <Routes>

            <Route path="/" element={<App />}>
              <Route path="login" element={<LoginPage />} />

              <Route path="signup" element={<SignupPage />} />

              <Route index element={<Home />} />

              <Route path="categories" element={<CategoriesPage />} />

              <Route path="teachers" element={<TeacherPage />} />

              <Route path="courses" element={<CoursesPage />} />

              <Route path="mycourses" element={<AuthLayout> <MyCoursesPage /> </AuthLayout>} />

              <Route path="course/learning/:courseId" element={<LearningPage />} />

              <Route path="/product-details/:name/:id" element={<ProductDetailsPage />} />

            </Route>


            <Route element={<AdminAuthLayout />}>
              <Route path="/admin" element={<Layout />}>

                <Route index element={<AdminDashboard />} />

                <Route path="add-course" element={<AddCourse />} />

                <Route path="course/:courseId/add-chapter" element={<AddChapter />} />

                <Route path="courses" element={<MyCourses />} />


              </Route>
              <Route path="*" element={<NotFound />} />
            </Route>

          </Routes>
        </BrowserRouter>

      </AdminContextProvider>

    </CourseContextProvider>

  </UserContextProvider>
);
