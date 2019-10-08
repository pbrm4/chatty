let userQuery = require('../queries/user.query');
let bcrypt = require('bcrypt');
let authUtils = require('../utils/auth.utils');


exports.userSignup = userSignup;

async function userSignup(req, res, next) {
    try {

        let user = await userQuery.getUserForLogin(req.body.email);
        if (user.length > 0) {
            return res.status(400).send({ success: false, message: "Email ID already used before" });
        }

        let hashed_password = await bcrypt.hash(req.body.password, parseInt(process.env.SALT_ROUNDS));
        // bcrypt.hash(req.body.password, process.env.SALT_ROUNDS, function (err, hash) {
        //     hashed_password = hash;
        // });

        let userObj = {
            email_id: req.body.email,
            password: hashed_password,
            Name: req.body.name
        }
        let addUser = await userQuery.addNewUser(userObj);

        let jwtToken = authUtils.generateToken(addUser[0]);

        res.cookie('jwt', jwtToken);
        return res.status(200).send({ success: true, msg: "User Created successfully" });
    }
    catch (err) {
        return res.status(500).send({ success: true, msg: "Kuch toh Fata" });
        console.log(err);
    }
}


function verifyJWTToken(req, res) {
    if (req.headers.authorization && req.headers.authorization.includes(" ")) {
        var token = req.headers.authorization.split(" ")[1];
    } else {
        var token = req.headers.authorization;
    }
    try {
        if (!token) {
            res.bhejdo(HttpStatus.UNAUTHORIZED, { success: false });
            return null;
        }
        var payload = jwt.verify(token, process.env.TOKEN_SECRET);
        if (payload) {
            return payload;
        }
        else {
            res.bhejdo(HttpStatus.UNAUTHORIZED, err);
            return null;
        }
    } catch (err) {
        res.bhejdo(HttpStatus.INTERNAL_SERVER_ERROR, err);
        return null;
    }
};