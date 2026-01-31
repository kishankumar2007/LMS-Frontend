import axios from "axios"
import { BASE_URL } from "../utils/constant"


export const createCourse = async (name,description,avatar,instructor,amount,category) => {
    try {
        const res = await axios.post(`${BASE_URL}/create-course`, { name, description, avatar, instructor, amount, category }, { withCredentials: true, headers: { "Content-Type": "multipart/form-data" } })

        return res.data
    } catch (error) {
        throw Error(error.response?.data?.message)
    }
}

export const editCourse = async (courseId) => {
    try {
        const res = await axios.post(`${BASE_URL}/edit-course/${courseId}`, { withCredentials: true })
        console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }
}


export const deleteCourse = async (courseId) => {
    try {

        const res = await axios.post(`${BASE_URL}/course/delete/${courseId}`, {}, { withCredentials: true })
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error.message)
    }
}



export const courseDetails = async (courseId) => {
    try {
        const res = await axios.get(`${BASE_URL}/courses/${courseId}`, { withCredentials: true })
        console.log(res.data)

    } catch (error) {
        console.log(error.message)
    }
}

export const allCourse = async (page = 1, limit = 10,category='') => {
    try {
        const { data: { courses } } = await axios.get(`${BASE_URL}/feed?page=${page}&limit=${limit}&category=${category}`, { withCredentials: true })

        if (!courses) return null

        return courses

    } catch (error) {
        throw Error(error.response?.data?.message || "Something went wrong!")
    }
}


export const adminCourses = async () => {
    try {
        const {data:{course}} = await axios.get(`${BASE_URL}/admin/courses`,{withCredentials:true})

        if(course){
            return course
        }
    } catch (error) {
        throw Error(error.message)
    }
}

export const buyCourse = async (userId, courseId) => {
    try {
        const res = await axios.post(`${BASE_URL}/user/${userId}/${courseId}/buy`, {}, { withCredentials: true })
        return res.data

    } catch (error) {
        throw Error(error.response?.data?.message)
    }
}


