const {axiosInstance} = require("./index");

export const addMovie = async (value) => {
    try{
        const response = await axiosInstance.post("/api/movies", value)
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const getAllMovies = async () => {
    try{
        const response = await axiosInstance.get("/api/movies")
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const updateMovie = async (value) => {
    try{
        const response = await axiosInstance.put("/api/movies", value)
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}

export const deleteMovie = async (obj) => {
    try{
        console.log("hello",obj);
        const response = await axiosInstance.delete(`/api/movies/${obj.movieId}`)
        return response.data
    }catch(err){
        console.log(err);
        return err.response.data
    }
}