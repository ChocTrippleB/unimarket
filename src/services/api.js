import axios from 'axios';

const api = axios.create({
    baseURL: 'https://localhost:7255/api', // Change to your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Optional: attach token if you're using auth
// api.interceptors.request.use(config => {
//   const token = localStorage.getItem('token');
//   if (token) config.headers.Authorization = `Bearer ${token}`;
//   return config;
// });

export default api;