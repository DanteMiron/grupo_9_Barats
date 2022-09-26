const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')
const cors= require('cors');



router.get('/users', cors(), apiController.users);
router.get('/users/:id', cors(),apiController.user);
router.get('/products', cors(),apiController.products);
router.get('/products/:id', cors(),apiController.product);


module.exports= router;