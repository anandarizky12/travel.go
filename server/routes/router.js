const express = require('express');
const router = express.Router();
const {
    register
    } = require('../controller/userController');


//trip import 
const { 
    getTrip, 
    createTrip, 
    deleteTrip ,
    updateTrip 
    } = require('../controller/tripController');


//auth user
router.post('/register', register);


//trip
router.get('/trip', getTrip);
router.post('/trip', createTrip);
router.delete('/trip/:id', deleteTrip);
router.patch('/trip/:id', updateTrip);



module.exports = router;