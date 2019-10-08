exports.addNewUser = function (user) {
    return db.from('users')
        .insert(user)
        .returning('*');
}