let jwt = require('jsonwebtoken');
let userQuery = require('../queries/user.query');
let bcrypt = require('bcrypt');


exports.userSignup = userSignup;

async function userSignup(req, res, next) {
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
        
        

    }
    catch (err) {
        console.log(err);
    }
}