import api from "../api";

const handleLogin = async () => {
    try {
        const res = await api.post("/auth/login", {
            email: values.email,
            password: values.password,
        });

        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));

        // navigate to dashboard/home
    } catch (err) {
        console.error(err);
        alert("Login failed");
    }
};