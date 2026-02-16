import React, { useEffect } from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const AuthLayout = ({ children }) => {

    const navigate = useNavigate()
    const { isLoggedIn,loading } = useUser()

    useEffect(() => {
        if(loading) return
        if (!isLoggedIn) {
            navigate("/login")
        }
    }, [navigate, isLoggedIn])
    return (
        <>
            {children}
        </>
    )
}

export default AuthLayout