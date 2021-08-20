const mongoose = require('mongoose');

const reviewSchema = mongoose.Schema(
    {
      name: { type: String, required: true },
      rating: { type: Number, required: true },
      comment: { type: String, required: true },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'user',
      },
    },
    {
      timestamps: true,
    }
  )
  

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
        image : {type:String, required: false},
        review : [reviewSchema],
        rating: {
            type: Number,
            required: true,
            default: 0,
          },
        numReviews: {
            type: Number,
            required: true,
            default: 0,
          },
        screen1 : {type:String, required: false},
        screen2 : {type:String, required: false},
        screen3 : {type:String, required: false},


    },  { timestamps: {} }
)


const tripModel = mongoose.model('trip', tripSchema, 'trip');

module.exports = tripModel;