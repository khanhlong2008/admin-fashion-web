const router = require("express-promise-router")()
const { get } = require("mongoose");
const productContrllers = require('../controllers/product_male')


router.route('/')
    .post(productContrllers.createProduct)
    .get(productContrllers.index);
router.route("/:productID")
    .get(productContrllers.getProduct)

module.exports = router