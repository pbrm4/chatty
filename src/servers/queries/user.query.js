exports.addNewUser = function (user) {
    return db.from('users')
        .insert(user)
        .returning('*');
}

exports.getUserForLogin = function (email_id) {
    return db.from('users')
        .where('email_id', email_id)
        .select('*');
}