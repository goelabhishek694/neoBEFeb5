import {axiosInstance} from "./index";

export const addShow = async (value) => {
    try{
        const response = await axiosInstance.post("/api/shows", value)
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const updateShow = async () => {
    try{
        const response = await axiosInstance.put("/api/shows")
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}


export const deleteShow = async (obj) => {
    try{
        console.log("hello",obj);
        const response = await axiosInstance.delete(`/api/shows/${obj.showId}`)
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const getShowsByTheatre = async (value) => {
    try{
        console.log("hello",value);
        const response = await axiosInstance.post(`/api/shows/by-theatre`, value)
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const getAllTheatresByMovie = async (value) => {
    try{
        console.log("hello",value);
        const response = await axiosInstance.post(`/api/shows/of-theatre`, value)
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}