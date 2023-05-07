const router = require('express').Router();
const categoryRoute = require('./category.route');
const productRoute = require("./product.route")
const userRoute = require("./user.route")

router.use('/categories', categoryRoute);

router.use('/products', productRoute);

router.use('/users', userRoute)

module.exports = router;
