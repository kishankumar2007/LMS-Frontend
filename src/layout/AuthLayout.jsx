import React, { useEffect } from 'react'
import { useUser } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'

const AuthLayout = ({ children }) => {

    const { isLoggedIn } = useUser()
    const navigate = useNavigate()

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/login")
        }
    }, [navigate])
    return (
        <>
            {children}
        </>
    )
}

export default AuthLayout