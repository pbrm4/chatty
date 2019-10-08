let express = require('express');
let router = express.Router();

let messagesCtrl = require('../controllers/messages.ctrl');

router.post('/messages', messagesCtrl.getInitialMessageLoad);

module.exports = router;