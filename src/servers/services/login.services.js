exports.login = login;
let userQuery = require('../queries/user.query');
let bcrypt = require('bcrypt');
let authUtils = require('../utils/auth.utils');


async function login(req) {
    try {
        let user = await userQuery.getUserForLogin(req.body.email);
        if (!user) {
            return { status: 400, success: false, message: "Email ID or password is incorrect" }
        }
        let yes = await bcrypt.compare(req.body.password, user[0].password);
        if (!yes) {
            return { status: 403, success: false, message: "Email ID or password is incorrect" }
        }
        let jwtToken = authUtils.generateToken(user[0]);

        return { status: 200, success: true, message: "Logging you in", jwtToken: jwtToken };
    }
    catch (err) {
        return { status: 500, success: false, message: "Kuch toh fata" };
    }
}