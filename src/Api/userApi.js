import axios from "axios"
import { BASE_URL } from "../utils/constant"

export const getProfile = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/profile`, { withCredentials: true })
        if(!res) return null

        return res.data.user

    } catch (error) {
        throw Error(error.response?.data?.message)
    }
}


export const myCourses = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/mycourses`, { withCredentials: true })
        if (!res) return null

        return res.data.courses

    } catch (error) {
        throw Error(error.response?.data?.message || "Something went wrong!")
    }
}

export const editProfile = async (data) => {
    try {
        const res = await axios.post(`${BASE_URL}/profile/edit`, { data }, { withCredentials: true })
        console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }
}


export const setInterest = async (interest) => {
    try {
        const res = await axios.post(`${BASE_URL}/user/interest`, { interest }, { withCredentials: true })
        console.log(res);

    } catch (error) {
        console.log(error.message)
    }
}