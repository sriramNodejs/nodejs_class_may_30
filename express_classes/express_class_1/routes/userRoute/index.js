const express = require('express');
const router = express.Router();


// import routers
const categoryRouters = require('./categories');
const orderRouter = require('./orders');
const productRouter = require('./products');

// use router
router.use(categoryRouters);
router.use(orderRouter);
router.use(productRouter)


module.exports = router