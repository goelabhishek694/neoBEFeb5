import axios from "axios";

//setting up a custom instance of axios 
export const axiosInstance = axios.create({
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${localStorage.getItem("token")}`
    }
})