exports.get50Messages = function (user_id) {
    return db.from('messages as msg')
        .innerJoin('users as u', 'u.id', 'msg.user_id')
        .orderBy('created_at', 'desc')
        .limit(50)
        .where('msg.is_deleted', false)
        .select([
            'msg.message',
            'u.Name',
            'u.email_id as email_id',
            'u.id as user_id',
            'msg.created_at as time_stamp'
        ]);
}

exports.addMessage = function (message_obj) {
    return db.from('messages')
        .insert(message_obj);
}