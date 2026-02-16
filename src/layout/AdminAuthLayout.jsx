import { Navigate, Outlet } from "react-router-dom";
import { useAdmin } from "../context/AdminContext";
import NotFound from "../components/NotFound";
import { useUser } from "../context/UserContext";

const AdminAuthLayout = () => {
    const { loading: adminLoading, admin } = useAdmin();
    const { isLoggedIn, loading: userLoading } = useUser();

    if (adminLoading || userLoading) {
        return (
            <div className="min-h-screen bg-linear-to-br from-slate-900 via-purple-700 to-slate-900 text-white flex items-center justify-center">
                <div className="w-10 h-10 rounded-full border-4 border-b-transparent border-t-white border-l-white border-r-white animate-spin"></div>
            </div>
        );
    }

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />;
    }

    if (!admin || admin.role !== "admin") {
        return <NotFound message="Unauthorized Access" />;
    }

    return <Outlet />;
};

export default AdminAuthLayout;
