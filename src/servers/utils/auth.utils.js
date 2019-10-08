let jwt = require('jsonwebtoken');
let moment = require('moment');
let userQuery = require('../queries/user.query');

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

async function verifyJWTToken(req, res, next) {
    let token;
    if (req.cookies && req.cookies.jwt) {
        token = req.cookies.jwt;
    }
    else {
        return res.status(403).send({ success: false, message: "Please Login Again" });
    }

    try {
        if (!token) {
            return res.status(403).send({ success: false });
        }
        var payload = jwt.verify(token, process.env.JWT_SECRET);
        if (payload) {
            req.user = {};
            let userDeets = await userQuery.getUserFromId(payload.sub);
            req.user = userDeets[0]
            next();
        }
        else {
            return res.status(403).send(err);
        }
    } catch (err) {
        return res.status(500).send(err);
    }
};