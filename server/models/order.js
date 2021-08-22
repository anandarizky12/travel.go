const mongoose =  require('mongoose');

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'user',
    },
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'trip',
    },
    counterQty: { type: Number, required: true },
    total: { type: Number, required: true },
    status: { type: String, required: true },
    attachment: { type: String, required: true },
    tripId: { type: String, required: true },
    userId: { type: String, required: true },
  
  },
  {
    timestamps: true,
  }
)

const orderModel = mongoose.model('order', orderSchema, 'order')

module.exports = orderModel;