import axios from "axios"
import { BASE_URL } from "../utils/constant"


export const createCourse = async (data) => {
    try {
        const res = await axios.post(`${BASE_URL}/create-course`, { data }, { withCredentials: true })
        console.log(res.data);

    } catch (error) {
        console.log(error.message)
    }
}

export const editCourse = async (courseId, data) => {
    try {
        const res = await axios.post(`${BASE_URL}/edit-course/${courseId}`, { withCredentials: true })
        console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }
}


export const deleteCourse = async (courseId) => {
    try {
        const res = await axios.post(`${BASE_URL}/delete/${courseId}`, {}, { withCredentials: true })
        console.log(res.data)
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

export const allCourse = async (page = 1, limit = 10) => {
    try {
        const { data: { course } } = await axios.get(`${BASE_URL}/feed?page=${page}&limit=${limit}`, { withCredentials: true })
        if (!course) return null

        return course

    } catch (error) {
        throw Error(error.response?.data?.message || "Something went wrong!")
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


