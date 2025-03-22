import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { Spinner } from "flowbite-react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRouter = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return (
            <div className="text-center">
                <Spinner aria-label="center-aligned spinner example" />
            </div>
        );
    }

    if (user) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRouter;
