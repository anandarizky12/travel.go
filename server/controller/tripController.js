const mongoose = require('mongoose');
const tripModel = require('../models/trip');



const getTrip = async (req, res) => {

    try{    
        const trip = await tripModel.find();

        res.status(200).send(trip);  

    }catch(error){
        console.log(error)
    }
   
};

const createTrip = async (req, res) => {

    try{    
        const trip = new tripModel({
        
            title: req.body.title ,
            countryId: req.body.countryId,
            accomodation: req.body.accomodation,
            transportation: req.body.transportation,
            eat: req.body.eat,
            day: req.body.day,
            dateTrip: req.body.dateTrip,
            price: req.body.price,
            quota: req.body.quota,
            description : req.body.description,
            image : req.body.image,
            screen1 : req.body.screen1,
            screen2 : req.body.screen2,
            screen3 : req.body.screen2
    
          });

          const newTrip = await trip.save();
          
          if(newTrip){
            
            return res.status(201).send({message : "New Trip Successfully Created", data : newTrip });
          
          };


        

    }catch(error){
        
        console.log(error)
        return res.status(500).send({message : "Trip create failed"});
        
    }
   
};


const deleteTrip = async (req, res) => {
        
        try{

            const id = req.params.id;
            
            await tripModel.findByIdAndRemove(id);

            res.status(200).send({status : 200, message: 'trip data succesfully deleted'});

        }
        catch(error){
            
            res.status(500).send({message : "failed to delete the trip data"})
        
        }
}



module.exports = { getTrip, createTrip, deleteTrip};