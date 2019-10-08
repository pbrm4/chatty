
module.exports = function (io) {
    io.on('connection', function (socket) {
        socket.on('user:logout', function (data) {
            io.sockets.emit('user:logout', { name: data.name })
        });
        socket.on('message', function (from, msg) {
            console.log('recieved message from',
                from, 'msg', JSON.stringify(msg));
            console.log('broadcasting message');
            console.log('payload is', msg);
            io.sockets.emit('broadcast', {
                payload: msg,
                source: from
            });
            console.log('broadcast complete');
        });
    });
};