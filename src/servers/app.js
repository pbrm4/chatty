var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
let dotenv = require('dotenv');
global.db = require('./db/knexfile');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    console.log('a user connected');
});

http.listen(process.env.PORT || 8080, function () {
    console.log('listening on *:8080');
});

app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(cookieParser());