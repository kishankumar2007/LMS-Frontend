import { createContext, useContext, useEffect, useState } from "react";
import { getProfile } from "../Api/userApi";

const AdminContext = createContext();

export const AdminContextProvider = ({ children }) => {
  const [isAdminLoggedIn, setAdminLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(null);
  const [adminCourses, setAdminCourses] = useState([]);

  useEffect(() => {
    const initAdmin = async () => {
      try {
        setLoading(true);

        const data = await getProfile();

        if (data?.role === "admin") {
          setAdmin(data);
          setAdminLoggedIn(true);
        } else {
          setAdminLoggedIn(false);
          setAdmin(null);
        }
      } catch {
        setAdminLoggedIn(false);
        setAdmin(null);
      } finally {
        setLoading(false);
      }
    };

    initAdmin();
  }, []);

  return (
    <AdminContext.Provider
      value={{
        isAdminLoggedIn,
        setAdminLoggedIn,
        loading,
        setLoading,
        admin,
        setAdmin,
        adminCourses,
        setAdminCourses,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
