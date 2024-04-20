const express = require('express');
const FoodController = require('../controllers/FoodController');

const router = express.Router();

router.post('/create', FoodController.Create);
router.get('/read', FoodController.Read);
router.post('/update/:id', FoodController.Update);
router.get('/delete/:id', FoodController.Delete);




module.exports = router;