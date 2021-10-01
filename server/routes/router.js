const express = require('express');
const router = express.Router();

//auth
const {
    register,
    login,
    getUser,
    updateUser 
    } = require('../controller/userController');

//user route
const {
    isAuth,
    isAdmin
} = require('../middleware/auth');


const {
    createOrder, 
    getOrderById, 
    getAllOrder,
    updateOrderToPaid,
    getMyOrder,
} = require('../controller/orderController');


//trip import 
const { 
    getTrip, 
    readOneTrip,
    createTrip, 
    deleteTrip ,
    updateTrip ,
    createProductReview
    } = require('../controller/tripController');


//auth user
router.post('/register', register);
router.post('/login',login);

//user routes 
router.get('/user/:id', isAuth, getUser);
router.put('/user/update', updateUser);

//trip
router.get('/trip', getTrip);
router.post('/trip', isAdmin, createTrip);
router.get('/trip/:id', isAuth, readOneTrip);
router.delete('/trip/:id', isAdmin, deleteTrip);
router.put('/trip/:id', isAdmin, updateTrip);
router.post('/:id/reviews' , isAuth , createProductReview);

//order 
router.post('/order', isAuth, createOrder);
router.get('/myorders', isAuth, getMyOrder);
router.get('/order', isAdmin, getAllOrder);
router.get('/order/:id', getOrderById);
router.put('/order/:id', isAdmin, updateOrderToPaid);

module.exports = router;