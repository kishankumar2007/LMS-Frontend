import { createContext, useContext, useState } from "react";

const UserContext = createContext();



export const UserContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [user, setUser] = useState(null)
    const [userCourse, setUserCourse] = useState(null)

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, userCourse, setUserCourse }}>
            {children}
        </UserContext.Provider>
    )
}



export const useUser = () => {
    return useContext(UserContext)
}

