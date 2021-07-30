const orderModel = require('../models/order');


const createOrder = async (req,res) =>{

    try{
        const {
            counterQty,
            total,
            status,
            tripId,
            userId
        } = req.body;

        if(counterQty == 0){
            res.status(401).send({message : "No order Items"});
        }

        const order = new orderModel({
        
            counterQty,
            total,
            user : req.user._id,
            status,
            tripId,
            userId,

        });

        const createdOrder = await order.save();


        return res.status(200).send({message : "success create order", data : createdOrder});

    }catch(error){
        console.log(error);
        return res.status(400).send({message : 'Error create Order'})
    }



};



const getOrderById = async (req, res) => {

    const order = await orderModel.findById(req.params.id)
  
    if (order) {
      res.json(order)
    } else {
      res.status(404)
          .send({messsage : "Order not found"})
    }
  };



const updateOrderToPaid = async (req, res) => {
    
    
    const order = await orderModel.findById(req.params.id)
  
    if (order) {
      order.isPaid = true
      order.paidAt = Date.now()
      order.paymentResult = {
        id: req.body.id,
        status: req.body.status,
        update_time: req.body.update_time,
        email_address: req.body.payer.email_address,
      }
  
      const updatedOrder = await order.save()
  
      res.json(updatedOrder)
    } else {
      res.status(404)
      throw new Error('Order not found')
    }
  };



  module.exports = {createOrder, getOrderById, updateOrderToPaid }