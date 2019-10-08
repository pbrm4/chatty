const express = require('express');
const app = express();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
let dotenv = require('dotenv');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
dotenv.config({ path: __dirname + '/.env' });
global.db = require('./db/knexfile');

let jwtVerifyFile = require('./utils/auth.utils');

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../clients/index.html'));
});


io.on('connection', function (socket) {
    console.log('a user connected');
});

http.listen(process.env.PORT || 8080, function () {
    console.log('listening on *:8080');
});

app.use(express.static(path.join(__dirname, '../clients/')));
app.use(bodyParser.json({ limit: '5mb' }));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));
app.use(cookieParser());
app.use('/auth', require('./routers/auth.router'));
app.use('/api', jwtVerifyFile.verifyJWTToken, require('./routers/messages.router'));
