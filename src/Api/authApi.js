import axios from "axios"
import { BASE_URL } from "../utils/constant"


export const signUp = async ({ fullName, email, password }) => {
    try {
        const {data:{data}} = await axios.post(`${BASE_URL}/register`, { name: fullName, email, password }, { withCredentials: true })
        
        return data
    } catch (error) {
        console.log(error?.response?.data?.message)
       throw Error(error?.response?.data?.message)
    }
}


export const login = async ({ email, password }) => {
    try {
        const res = await axios.post(`${BASE_URL}/login`, { email, password }, { withCredentials: true })

        if (!res) return null

        return res.data.user
    } catch (error) {
        throw Error(error?.response?.data?.message)

    }
}

export const logout = async () => {
    try {
        const res = await axios.post(`${BASE_URL}/logout`, {}, { withCredentials: true })
        console.log(res.data.message)
    } catch (error) {
        console.log(error.message)
    }
}