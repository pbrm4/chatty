let jwt = require('jsonwebtoken');
let moment = require('moment');

exports.generateToken = generateToken;
exports.verifyJWTToken = verifyJWTToken;

function generateToken(user) {
    let days = 1;
    let payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(days, 'days').unix()
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
}

function verifyJWTToken(req, res) {
    let token;
    if (req.cookies && req.cookies.token) {
        token = req.cookies.token;
    }
    else {
        res.status(403).send({ success: false, message: "Please Login Again" });
    }

    try {
        if (!token) {
            res.status(403).send({ success: false });
            return null;
        }
        var payload = jwt.verify(token, process.env.JWT_SECRET);
        if (payload) {
            req.user = {};
            req.user.id = payload.sub;
            next();
        }
        else {
            res.status(403).send(err);
            return null;
        }
    } catch (err) {
        res.status(500).send(err);
        return null;
    }
};