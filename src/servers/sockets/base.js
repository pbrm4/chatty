let messageServices = require('../services/messages.services');
var profanity = require("profanity-hindi");

module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.on('user:logout', function (data) {
            io.sockets.emit('user:logout', data)
        });
        socket.on('chat', function (data) {
            data.message = profanity.maskBadWords(data.message);
            io.sockets.emit('chat', data);
            messageServices.addMessageToDataStore(data);
        });
    });
};