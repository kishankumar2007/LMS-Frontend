import { BASE_URL } from "../utils/constant"
import axios from "axios"


export const getChapter = async (courseId) => {
    try {
        const { data: { chapters } } = await axios.get(`${BASE_URL}/course/${courseId}/chapters`, { withCredentials: true })
        if (!chapters) return []
        return chapters
    } catch (error) {
        throw Error(error.response?.data?.message)
    }
}

export const addChapter = async (courseId, data) => {
    try {
        const res = await axios.post(`${BASE_URL}/course/${courseId}/chapter/create`, data, { withCredentials: true })
        console.log(res.data)
        if (!res) throw Error("Failed to add chapter")
        return true
    } catch (error) {
        throw Error(error?.response?.data?.message)
    }
}

export const editChapter = async (chapterId, data) => {
    try {
        const res = await axios.patch(`${BASE_URL}/course/chapter/${chapterId}`, data, { withCredentials: true })

        if (!res) throw Error("Failed to edit the chapters.")

        return true
    } catch (error) {
        throw Error(error?.response?.data?.message)
    }
}



export const deleteChapter = async (chapterId) => {
    try {
        const res = await axios.post(`${BASE_URL}/course/${chapterId}/delete`, {}, { withCredentials: true })
        if (!res) throw Error("Failed to delete the chapters.")
    } catch (error) {
        throw Error(error?.response?.data?.message)
    }
}

