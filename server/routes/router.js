const express = require('express');
const router = express.Router();
const { getTrip, createTrip, deleteTrip } = require('../controller/tripController');

router.get('/trip', getTrip);
router.post('/trip', createTrip);
router.delete('/trip/:id', deleteTrip);


module.exports = router;