const router = require('express-promise-router')();
const passport = require('passport');

const authControllers = require('../controllers/user');
const passportConfig = require('../middlewares/passport');

router.route('/signup').post(authControllers.signUp);
router.route('/signin').post(authControllers.signIn);
router
  .route('/secret')
  .get(
    passport.authenticate('jwt', { session: false }),
    authControllers.secret
  );
router
  .route('/secret_admin')
  .get(
    passport.authenticate('jwt', { session: false }),
    authControllers.secretAdmin
  );
module.exports = router;
