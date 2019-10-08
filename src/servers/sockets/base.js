let messageServices = require('../services/messages.services');
module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.on('user:logout', function (data) {
            io.sockets.emit('user:logout', data)
        });
        socket.on('chat', function (data) {
            io.sockets.emit('chat', data);
            messageServices.addMessageToDataStore(data);
        });
    });
};