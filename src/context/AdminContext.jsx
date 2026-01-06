import { createContext, useContext, useState } from "react";

const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [myCourses, setMyCourses] = useState([]);

  return (
    <AdminContext.Provider
      value={
        {isLoggedIn, setIsLoggedIn, user, setUser, myCourses, setMyCourses}
      }
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => {
  return useContext(AdminContext);
};
