let jwt = require('jsonwebtoken');
let userQuery = require('../queries/user.query');
let bcrypt = require('bcrypt');
let authUtils = require('../utils/auth.utils');


exports.login = login;

async function login(req, res, next) {
    try {
        let hashed_password;
        await bcrypt.hash(req.body.password, process.env.SALT_ROUNDS, function (err, hash) {
            hashed_password = hash;
        });

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