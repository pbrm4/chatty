let userQuery = require('../queries/user.query');
let bcrypt = require('bcrypt');
let authUtils = require('../utils/auth.utils');

exports.login = login;

async function login(req) {
    try {
        let user = await userQuery.getUserForLogin(req.body.email);
        if (user.length == 0) {
            return { status: 404, success: false, message: "Email ID or password is incorrect" }
        }
        let yes = await bcrypt.compare(req.body.password, user[0].password);
        if (!yes) {
            return { status: 403, success: false, message: "Email ID or password is incorrect" }
        }
        let jwtToken = authUtils.generateToken(user[0]);
        delete user[0].password;

        return { status: 200, success: true, message: "Logging you in", jwtToken: jwtToken, data: user[0] };
    }
    catch (err) {
        return { status: 500, success: false, message: "Kuch toh fata" };
    }
}