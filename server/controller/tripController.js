const mongoose = require('mongoose');
const tripModel = require('../models/trip');



const getTrip = async (req, res) => {

    try{    
        const trip = await tripModel.find();

        return res.status(200).send(trip);  

    }catch(error){
        return res.status(500).send({message : "failed to fetch the data from db"});  

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
        return res.status(400).send({message : "Trip create failed"});
        
    }
   
};


const deleteTrip = async (req, res) => {
        
        try{

            const id = req.params.id;
            
            await tripModel.findByIdAndRemove(id);

            return  res.status(200).send({status : 200, message: 'trip data succesfully deleted'});

        }
        catch(error){
            
           return  res.status(400).send({message : "failed to delete the trip data"})
        
        }
};


const updateTrip = async (req,res) =>{

    try{
        const {id} = req.params;
        const trip = await tripModel.findById(id);
        
        if(trip){

            trip.title = req.body.title;
            trip.countryId = req.body.countryId;
            trip.accomodation = req.body.accomodation;
            trip.transportation = req.body.transportation;
            trip.eat = req.body.eat;
            trip.day = req.body.day;
            trip.dateTrip = req.body.dateTrip;
            trip.price = req.body.price;
            trip.quota = req.body.quota;
            trip.description  = req.body.description;
            trip.image  = req.body.image;
            trip.screen1  = req.body.screen1;
            trip.screen2  = req.body.screen2;
            trip.screen3  = req.body.screen2;
            
            const updatedTrip = await trip.save();
       
            if(updatedTrip){
                return res.status(200)
                          .send({message : "Data successfully updated!"});
            }
        }

        return res.status(400).send({message : "failed to update data possibly because of the id invalid"});
    
    }catch(error){

            console.log(error)
            return res.status(500)
                      .send({message : "failed to update data"});

    }
} 



module.exports = { getTrip, createTrip, deleteTrip, updateTrip };