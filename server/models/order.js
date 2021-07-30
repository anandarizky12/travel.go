import mongoose from 'mongoose'

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
    total: { type: Integer, required: true },
    status: { type: String, required: true },
    attachment: { type: String, required: true },
    tripId: { type: Integer, required: true },
    userId: { type: Integer, required: true },
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

export default orderModel;