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

    try{    

        const { imageTrip } = req.files;
        const imageTripName = imageTrip.name;
        await imageTrip.mv(`./images/${imageTripName}`);
        const { screen1 } = req.files;
        const { screen2 } = req.files;
        const { screen3 } = req.files;
        const screen1Name = screen1.name;
        const screen2Name = screen2.name;
        const screen3Name = screen3.name;
        await screen1.mv(`./images/${screen1Name}`);
        await screen2.mv(`./images/${screen2Name}`);
        await screen3.mv(`./images/${screen3Name}`);

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
            image: imageTripName,
            screen1: screen1Name,
            screen2: screen2Name,
            screen3: screen3Name,
    
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


        const { imageTrip } = req.files;
        const imageTripName = imageTrip.name;
        await imageTrip.mv(`./images/${imageTripName}`);
        const { screen1 } = req.files;
        const { screen2 } = req.files;
        const { screen3 } = req.files;
        const screen1Name = screen1.name;
        const screen2Name = screen2.name;
        const screen3Name = screen3.name;
        await screen1.mv(`./images/${screen1Name}`);
        await screen2.mv(`./images/${screen2Name}`);
        await screen3.mv(`./images/${screen3Name}`);

        if(trip)
         {
            trip.title = req.body.title
            trip.countryId = req.body.countryId
            trip.accomodation = req.body.accomodation
            trip.transportation = req.body.transportation
            trip.eat = req.body.eat
            trip.day = req.body.day
            trip.dateTrip = req.body.dateTrip
            trip.price = req.body.price
            trip.quota = req.body.quota
            trip.description  = req.body.description
            trip.image  = imageTripName
            trip.screen1  = screen1Name
            trip.screen2  = screen2Name
            trip.screen3  = screen3Name

            const updatedProduct = await trip.save();

            return res.status(200)
            .send({message : "Data successfully updated!", data : updatedProduct });
         };

            return res.status(400).send({message : "failed to update data possibly because of the id invalid"});
        }

        catch(error){

          console.log(error)
          return res.status(500)
                    .send({message : "failed to update data"});
  }    
}


const createProductReview = async (req, res) => {
    const { rating, comment } = req.body
  
    const trip = await tripModel.findById(req.params.id)
    if (trip) {
      const alreadyReviewed = trip.reviews.find(
        (r) => r.user.toString() === req.user._id.toString()
      )
  
      if (alreadyReviewed) {
    
         return res.status(400).json({ message: 'You Already Reviewed This Trip' })
        
      }
     
  
      const review = {
        name: req.user.username,
        rating: Number(rating),
        comment,
        user: req.user._id,
      }
  
      trip.reviews.push(review)
  
      trip.numReviews = trip.reviews.length
  
      trip.rating =
        trip.reviews.reduce((acc, item) => item.rating + acc, 0) /
        trip.reviews.length
  
      await trip.save()
      res.status(201).json({ message: 'Review added' })
    } else {
      res.status(404).json({ message: 'Review Failed To add' })
     
    }
  };


module.exports = { getTrip, createTrip, deleteTrip, updateTrip, readOneTrip,  createProductReview };