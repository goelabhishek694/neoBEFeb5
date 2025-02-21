import axios from "axios";
const token = localStorage.getItem("token");
//setting up a custom instance of axios 
export const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
    }
})