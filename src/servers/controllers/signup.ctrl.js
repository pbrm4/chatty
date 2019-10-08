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