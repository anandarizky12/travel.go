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


const readOneTrip = async (req, res) => {
    
    try {
      const id = req.params.id;
      const trip = await tripModel.findById(id);

      if(!trip){
        res
        .status(400)
        .send({ status: 400, message: `${id} is not valid` });
      }

      res
        .status(200)
        .send({ status: 200, message: "Read trip success", data: trip });
    } catch (err) {
      res.status(500).send({ status: 500, message: "Failed to read trip" });
    }
  };

const createTrip = async (req, res) => {


    console.log(req.body)
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
            image: "imageTripName.jpg",
            screen1: "imageTripName.jpg",
            screen2: "imageTripName.jpg",
            screen3: "imageTripName.jpg",
    
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
            console.log(id);
            const data = await tripModel.findByIdAndRemove(id);
            
            if(data){
          
              return  res.status(200).send({status : 200, message: 'trip data succesfully deleted'});
            }
         
            return  res.status(400).send({status : 400, message: 'Not valid Id'});

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

const createProductReview = async (req, res) => {
    const { rating, comment } = req.body
  
    const product = await Product.findById(req.params.id)
  
    if (product) {
      const alreadyReviewed = product.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      )
  
      if (alreadyReviewed) {
        res.status(400)
        throw new Error('Product already reviewed')
      }
  
      const review = {
        name: req.user.name,
        rating: Number(rating),
        comment,
        user: req.user._id,
      }
  
      product.reviews.push(review)
  
      product.numReviews = product.reviews.length
  
      product.rating =
        product.reviews.reduce((acc, item) => item.rating + acc, 0) /
        product.reviews.length
  
      await product.save()
      res.status(201).json({ message: 'Review added' })
    } else {
      res.status(404)
      throw new Error('Product not found')
    }
  };


module.exports = { getTrip, createTrip, deleteTrip, updateTrip, readOneTrip };