const router = require("express-promise-router")()
const productContrllers = require('../controllers/product_female')


router.route('/')
    .post(productContrllers.createProduct)
    .get(productContrllers.index);
router.route("/:productID")
    .get(productContrllers.getProduct)

module.exports = router