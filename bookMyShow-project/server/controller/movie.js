const MovieModel = require("../models/movie");

const addMovie = async (req,res) => {
    try{
        const {body} = req;
        const newMovie = new MovieModel(body);
        await newMovie.save();
        res.status(200).json({
            success: true,
            message:"new movie added"
        })
    }catch(err){
        console.log(err);
        res.send({
            success: false,
            message: err.message
        });

    }
}

const getAllMovies = async (req,res) => {
    try{
        const allMovies = await MovieModel.find();
        if(!allMovies){
            res.status(400).json({
                message:"no movies found"
            })
        }
        res.status(200).json({
            success: true,
            message:"all movies",
            data: allMovies
        })
    }catch(err){
        console.log(err);
        res.send({
            success: false,
            message: err.message
        });

    }
}

const updateMovie = async (req,res) => {
    try{
        const {body} = req;
        const updatedMovie = await MovieModel.findByIdAndUpdate(body.movieId, body);
        if(!updatedMovie){
            res.status(400).json({
                message:"movie not found"
            })
        }
        res.status(200).json({
            success: true,
            message:"movie updated",
            data: updatedMovie
        })
    }catch(err){
        console.log(err);
        res.send({
            success: false,
            message: err.message
        });
    }
}

const deleteMovie = async (req,res) => {
    try{
        const {movieId} = req.params;    
        const deletedMovie = await MovieModel.findOneAndDelete({_id:movieId});
        res.status(200).json({
            success: true,
            message:"movie deleted",
            data: deletedMovie
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        });
    }
}

const getMovieById = async (req, res) => {
    try{
        const {movieId} = req.params;
        const movie = await MovieModel.findById(movieId);
        if(!movie){
            res.status(400).json({
                message:"movie not found"
            })
        }
        res.status(200).json({
            success: true,
            message:"movie found",
            data: movie
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        });
    }

}

module.exports = {
    addMovie,
    getAllMovies,
    updateMovie,
    deleteMovie,
    getMovieById
}

