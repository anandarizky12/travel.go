const express = require('express');
const router = express.Router();


//auth
const {
    register,
    login,
    getUser
    } = require('../controller/userController');

//user route
const {
    isAuth,
    isAdmin
} = require('../middleware/auth');


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

//trip
router.get('/trip', getTrip);
router.post('/trip', createTrip);
router.delete('/trip/:id', deleteTrip);
router.patch('/trip/:id', updateTrip);



module.exports = router;