const {axiosInstance} = require("./index");

//make payment
export const makePayment = async (value) => {
    try{
        const response = await axiosInstance.post("api/bookings/make-payment", value);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data;
    }
}

export const bookShow = async (value) => {
    try{
        const response = await axiosInstance.post("api/bookings/book-show", value);
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data;
    }
}

export const getAllBookings = async () => {
    try{
        const response = await axiosInstance.get('book-show/api/bookings/all');
        return response.data;
    }catch(err){
        console.log(err);
        return err.response.data;
    }
}