import { createContext, useContext, useState } from "react";


const CourseContext = createContext()



export const CourseContextProvider = ({ children }) => {
    const [allCourses, setAllCourses] = useState([])
    const [chapters, setChapters] = useState(null)

    return (
        <CourseContext.Provider value={{ allCourses, setAllCourses, chapters, setChapters }}>
            {children}
        </CourseContext.Provider>
    )
}




export const useCourse = () => {
    return useContext(CourseContext)
}