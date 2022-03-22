const router = require('express-promise-router')()

const userControllers = require('../controllers/user')

router.route('/')
    .get(userControllers.index)
    .post(userControllers.newUser)

router.route('/:userID')
    .get(userControllers.getUser)
    .put(userControllers.updateUser)

module.exports = router