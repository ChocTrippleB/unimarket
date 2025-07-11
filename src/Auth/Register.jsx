import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api.js";

const Register = () => {
    const [form, setForm] = useState({
        fullName: "",
        username: "",
        email: "",
        password: "",
    });

    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const navigate = useNavigate();

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError("");
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setSuccess("");

        try {
            await api.post("/auth/register", form);
            setSuccess("✅ Registered! Check your email to confirm.");
            setTimeout(() => navigate("/confirm-email"), 2500); // Redirect to login
        } catch (err) {
            if (err.response?.data?.includes("already registered")) {
                setError("❌ Email is already registered.");
            }
            else {
                setError("Something went wrong. Please try again.");
            }
        }
    };

    return (
        <div className="max-w-md mx-auto mt-16 p-6 bg-white shadow-md rounded-xl">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label>Full Name</label>
                    <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label>Username</label>
                    <input
                        type="text"
                        name="username"
                        value={form.username}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label>Email (@mandela.ac.za only)</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                <div className="mb-4">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border rounded"
                    />
                </div>

                {error && <p className="text-red-600 mb-3">{error}</p>}
                {success && <p className="text-green-600 mb-3">{success}</p>}

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
                >
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
