import { useContext } from "react";
import { AuthContext } from "../context/AuthProvider";
import { useNavigate } from "react-router-dom";

const Logout = () => {
    const { logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout()
            .then(() => {
                alert("Logout successful");
                navigate("/", { replace: true });
            })
            .catch((error) => {
                console.error("Logout error:", error);
            });
    };

    return (
        <div className="h-screen bg-teal-100 flex items-center justify-center">
            <button className="bg-red-700 px-8 py-2 text-white rounded" onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
};

export default Logout;
