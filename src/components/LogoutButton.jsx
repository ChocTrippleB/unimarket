import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        navigate("/");
    };

    return (
        <button
            onClick={handleLogout}
            className="px-2 py-1 bg-red-600 text-white text-xs rounded-md hover:bg-red-700"
        >
            Logout
        </button>
    );
};

export default LogoutButton;
