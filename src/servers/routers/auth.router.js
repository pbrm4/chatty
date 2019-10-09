let express = require('express');
let router = express.Router();

let loginCtrl = require('../controllers/login.ctrl');

router.post('/login', loginCtrl.login);

module.exports = router;