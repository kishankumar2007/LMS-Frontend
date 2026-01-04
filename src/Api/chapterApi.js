import { BASE_URL } from "../utils/constant"
import axios from "axios"


export const getChapter = async (courseId) => {
    try {
        const { data: { chapters } } = await axios.get(`${BASE_URL}/course/${courseId}/chapters`, { withCredentials: true })
        if (!chapters) return null
        return chapters
    } catch (error) {
        throw Error(error.response?.data?.message)
    }
}

export const addChapter = async (courseId, data) => {
    try {
        const res = await axios.post(`${BASE_URL}/course/${courseId}/chapter/create`, { data }, { withCredentials: true })
        console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }
}

export const editChapter = async (chapterId, data) => {
    try {
        const res = await axios.post(`${BASE_URL}/course/chapter/${chapterId}/edit`, { data }, { withCredentials: true })
        console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteChapterFile = async (chapterId, fileId) => {
    try {
        const res = await axios.post(`${BASE_URL}/course/chapter/${chapterId}/${fileId}/delete`, {}, { withCredentials: true })
        console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }
}

export const deleteChapter = async (chapterId) => {
    try {
        const res = await axios.post(`${BASE_URL}/course/${chapterId}/delete`, {}, { withCredentials: true })
        console.log(res.data)
    } catch (error) {
        console.log(error.message)
    }
}

