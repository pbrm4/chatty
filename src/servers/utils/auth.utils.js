let jwt = require('jsonwebtoken');

exports.generateToken = generateToken;

function generateToken(user) {
    let days = 1;
    let payload = {
        sub: user.id,
        iat: moment().unix(),
        exp: moment().add(days, 'days').unix()
    };
    return jwt.sign(payload, process.env.JWT_SECRET);
}