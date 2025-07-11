import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [error, setError] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        setError("");

        try {
            const res = await api.post("/auth/login", { email, password });

            localStorage.setItem("token", res.data.token);
            localStorage.setItem("user", JSON.stringify(res.data.user));

            navigate("/cart");
        } catch (err) {
            if (err.response?.status === 400 || err.response?.status === 401 && err.response.data.errors) {
                const errors = err.response.data.errors;
                setError(errors);
            }
            if (err.response?.data?.includes("confirm your email before")){
                setError("✔️ Confirm your email before you can login.");
            }
            else {
                setError("Something went wrong. Try again.");
            }
        }
    };

    return (
        <div className="max-w-md mx-auto mt-20 p-6 bg-white shadow-md rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

            <form onSubmit={handleLogin}>
                <div className="mb-4">
                    <label>Email</label>
                    <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label>Password</label>
                    <input
                        type="password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                    />
                </div>

                {error && <p className="text-red-600 mb-4">{error}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
