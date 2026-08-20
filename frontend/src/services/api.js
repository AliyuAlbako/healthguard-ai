import axios from "axios";

const api = axios.create({
    baseURL: "http://127.0.0.1:8000" || "https://healthguard-ai-api.onrender.com",
    headers: {
        "Content-Type": "application/json",
    },
});

export default api;