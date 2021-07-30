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
    updateOrderToPaid 
} = require('../controller/orderController');


//trip import 
const { 
    getTrip, 
    createTrip, 
    deleteTrip ,
    updateTrip 
    } = require('../controller/tripController');


//auth user
router.post('/register', register);
router.post('/login',login);

//user routes 
router.get('/user/:id', isAuth, getUser);
router.patch('/user/:id', updateUser);

//trip
router.get('/trip', getTrip);
router.post('/trip', isAdmin, createTrip);
router.delete('/trip/:id', isAdmin, deleteTrip);
router.patch('/trip/:id', isAdmin, updateTrip);

//order 
roter.post('/order', createOrder);
router.get('/order/:id', getOrderById);
router.patch('/order/:id', updateOrderToPaid);

module.exports = router;