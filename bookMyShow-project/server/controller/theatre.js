const TheatreModel = require("../models/theatre");

const addTheatre = async (req,res) => {
    try{
        const {body} = req;
        const newThetare = new TheatreModel(body);
        await newThetare.save();
        res.status(200).json({
            success: true,
            message:"new theatre added"
        })
    }catch(err){
        console.log(err);
        res.send({
            success: false,
            message: err.message
        });

    }
}

//get all theatres for admin
const getAllTheatres = async (req,res) => {
    try{
        const allTheatres = await TheatreModel.find().populate("owner");
        if(!allTheatres){
            res.status(400).json({
                message:"no theatres found"
            })
        }
        res.status(200).json({
            success: true,
            message:"all theatres",
            data: allTheatres
        })
    }catch(err){
        console.log(err);
        res.send({
            success: false,
            message: err.message
        });

    }
}

const updateTheatre = async (req,res) => {
    try{
        const {body} = req;
        const updatedTheatre = await TheatreModel.findByIdAndUpdate(body.theatreId, body);
        if(!updatedTheatre){
            res.status(400).json({
                message:"theatre not found"
            })
        }
        res.status(200).json({
            success: true,
            message:"theatre updated",
            data: updatedTheatre
        })
    }catch(err){
        console.log(err);
        res.send({
            success: false,
            message: err.message
        });
    }
}

const deleteTheatre = async (req,res) => {
    try{
        const {theatreId} = req.params;    
        const deletedTheatre = await TheatreModel.findOneAndDelete({_id:theatreId});
        res.status(200).json({
            success: true,
            message:"theatre deleted",
            data: deletedTheatre
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        });
    }
}

//get all theatres of a specific owner
const partnerTheatres =  async (req,res) => {
    try{
        let {partnerId} = req.params;
        const allPartnerTheatres = await TheatreModel.find({owner: partnerId});
        res.status(200).json({
            success: true,
            message:"partner theatre retrieved",
            data: allPartnerTheatres
        })
    }catch(err){
        res.send({
            success: false,
            message: err.message
        });
    }
}

module.exports = {
    addTheatre,
  getAllTheatres,
  updateTheatre,
  deleteTheatre,
  partnerTheatres
}

