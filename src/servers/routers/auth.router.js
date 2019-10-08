let express = require('express');
let router = express.Router();

let signupCtrl = require('../controllers/signup.ctrl');
router.post('/signup', signupCtrl.userSignup);
router.post('/login')

module.exports = router;