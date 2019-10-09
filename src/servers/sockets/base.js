var profanity = require("profanity-hindi");

module.exports = function (io) {
    io.on('connection', function (socket) {
        console.log("New User Connected");
    });
};