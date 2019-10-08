let express = require('express');
let router = express.Router();

let signupCtrl = require('../controllers/signup.ctrl');
let loginCtrl = require('../controllers/login.ctrl');

router.post('/signup', signupCtrl.userSignup);
router.post('/login', loginCtrl.login);

module.exports = router;