const orderModel = require('../models/order');
const userModel = require('../models/user');
const tripModel = require('../models/trip');

// exports.readAllTransaction = async (req, res) => {
//   try {
//     const transaction = await Transaction.findAll({
//       attributes: {
//         exclude: ["tripId", "createdAt", "updatedAt"],
//       },
//       include: [
//         {
//           model: User,
//           as: "user",
//         },
//         {
//           model: Trip,
//           as: "trip",
//           attributes: {
//             exclude: ["countryId", "tripId", "createdAt", "updatedAt"],
//           },
//           include: {
//             model: Country,
//             as: "country",
//             attributes: {
//               exclude: ["createdAt", "updatedAt"],
//             },
//           },
//         },
//       ],
//     });
//     res.status(200).send({
//       status: 200,
//       message: "read transaction success",
//       data: transaction,
//     });
//   } catch (err) {
//     res.status(500).send({ status: 500, message: "read transaction failed" });
//   }
// };


const getAllOrder = async (req,res) => {

  try{

    const order = await orderModel.find({}).
      populate({ path: 'user', select: 'username email phone address profile' }).
      populate({ path: 'trip', populate : { path : 'trip' }});

    return res.status(200).send({ message : 'Get All Order Success', data : order});
  
  }catch(error){
    
    console.log(error)
    return res.status(400).send({ message : 'Failed To get All Order' });
  
  }

}

const createOrder = async (req,res) =>{

  const { attachment } = req.files;
  const attachmentName = attachment.name;
  await attachment.mv(`./Payment-Image/${attachmentName}`);
  
    try{
        const {
            counterQty,
            total,
            status,
            tripId,
            // attachment,
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
            attachment : attachmentName,
            trip : tripId,
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


const getMyOrder = async ( req, res ) => {
  
  try{
      const order = await orderModel.find({user : req.user._id}).
                    populate({ path: 'user', select: 'username email phone address profile' }).
                    populate({ path: 'trip', populate : { path : 'trip' }});

      return res.status(200).send({message : 'Get order success', data : order})
  
    }catch(err){
      console.log(err)
      return res.status(400).send({error : 'Failed to get order'})
  }

}

const updateOrderToPaid = async (req, res) => {
  
  try {
    const id = req.params.id;
    const { status } = req.body;

    const order = await orderModel.findById(id);
    
    console.log(req.body)
    if(!order){
      res.status(404).send({
        status: 404,
        message: "ID Not Found",
      });
    }

    order.status = status; 
    const updatedStatus = await order.save();
    
    res.status(200).send({
      status: 200,
      message: "update transaction success",
      data: updatedStatus,
    });
  } catch (err) {
  
    res.status(500).send({ status: 500, message: "update transaction failed" });
  }
  };


  module.exports = {createOrder, getOrderById, updateOrderToPaid, getAllOrder, getMyOrder };