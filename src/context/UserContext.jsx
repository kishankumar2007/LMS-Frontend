import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "../Api/userApi";

const UserContext = createContext();



export const UserContextProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const [userCourse, setUserCourse] = useState(null)
    const [currentVideo, setCurrentVideo] = useState(null)

    useEffect(() => {
        const initUser = async () => {
            try {
                setLoading(true);

                const data = await getProfile();

                if (data) {
                    setUser(data);
                    setIsLoggedIn(true);
                } else {
                    setIsLoggedIn(false);
                    setUser(null);
                }
            } catch {
                setIsLoggedIn(false);
                setUser(null);
            } finally {
                setLoading(false);
            }
        };

        initUser();
    }, []);

    return (
        <UserContext.Provider value={{ isLoggedIn, loading, setLoading, setIsLoggedIn, user, setUser, userCourse, setUserCourse, currentVideo, setCurrentVideo }}>
            {children}
        </UserContext.Provider>
    )
}



export const useUser = () => {
    return useContext(UserContext)
}

