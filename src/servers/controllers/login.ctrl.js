let loginServices = require('../services/login.services');

exports.login = login;

async function login(req, res, next) {
    try {
        let result = await loginServices.login(req);
        if (result.status == 200) {
            res.cookie('jwt', result.jwtToken);
            socketIo.sockets.emit('user:join', { email: result.data.email_id, name: result.data.Name });
            return res.status(result.status).send({ success: result.success, message: result.message, data: result.data });
        }
        return res.status(result.status).send({ success: result.success, message: result.message });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ success: true, msg: "Kuch toh Fata" });
    }
}