const express = require('express');
const router = express.Router();
const apiController = require('../controllers/apiController')



router.get('/users', apiController.users);
router.get('/users/:id', apiController.user);
router.get('/products', apiController.products);
router.get('/products/:id', apiController.product);


module.exports= router;