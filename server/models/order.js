const mongoose =  require('mongoose');

const orderSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'userModel',
    },
    trip: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'tripModel',
    },
    counterQty: { type: Number, required: true },
    total: { type: Number, required: true },
    status: { type: String, required: true },
    attachment: { type: String, required: true },
    tripId: { type: Number, required: true },
    userId: { type: Number, required: true },
    isPaid: {
        type: Boolean,
        required: true,
        default: false,
      },
    paidAt: {
        type: Date,
      },
    paymentMethod: {
        type: String,
        required: true,
      },
    paymentResult: {
        id: { type: String },
        status: { type: String },
        update_time: { type: String },
        email_address: { type: String },
      },
  },
  {
    timestamps: true,
  }
)

const orderModel = mongoose.model('order', orderSchema, 'order')

module.exports = orderModel;