let express = require('express');
let router = express.Router();

let messagesCtrl = require('../controllers/messages.ctrl');

router.get('/messages', messagesCtrl.getInitialMessageLoad);

module.exports = router;