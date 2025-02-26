const {axiosInstance} = require("./index");

export const addTheatre = async (value) => {
    try{
        const response = await axiosInstance.post("/api/theatre", value)
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const getAllTheatres = async () => {
    try{
        const response = await axiosInstance.get("/api/theatre")
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const updateTheatre = async (value) => {
    try{
        const response = await axiosInstance.put("/api/theatre", value)
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const deleteTheatre = async (obj) => {
    try{
        console.log("hello",obj);
        const response = await axiosInstance.delete(`/api/theatre/${obj.theatreId}`)
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const partnerTheatres = async (obj) => {
    try{
        console.log("hello",obj);
        const response = await axiosInstance.delete(`/api/theatre/partner/${obj.partnerId}`)
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}