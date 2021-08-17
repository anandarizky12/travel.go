const mongoose = require('mongoose');


const tripSchema = new mongoose.Schema(
   
    {

        title: { type: String, required: true },
        countryId: { type: String, required: true },
        accomodation: { type: String, required: true },
        transportation: { type: String, default: 0, required: true },
        eat: { type: String, required: true },
        day: { type: Number, default: 0, required: true },
        dateTrip: { type: String, required: true },
        price: { type: Number, default: 0, required: true },
        quota: { type: Number, default: 0, required: true },
        description : {type: String, required: true},
        image : {type:String, required: true},
        screen1 : {type:String, required: true},
        screen2 : {type:String, required: true},
        screen3 : {type:String, required: true},


    },  { timestamps: {} }
)


const tripModel = mongoose.model('trip', tripSchema, 'trip');

module.exports = tripModel;