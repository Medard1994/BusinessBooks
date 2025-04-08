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
        
        <div className="h-[300px] w-[400px] ml-[15%]  flex items-center justify-center bg-red-100 rounded-lg shadow-xl hover:shadow-2xl transition-all ease-in-out duration-300">
  <button
    className="bg-blue-400 px-8 py-3 text-white rounded-lg shadow-lg hover:bg-red-600 transform transition-all ease-in-out duration-300 hover:scale-105"
    onClick={handleLogout}
  >
    Logout
  </button>
</div>





    );
};

export default Logout;
