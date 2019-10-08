exports.get50Messages = function (user_id) {
    return db.from('messages as msg')
        .innerJoin('users as u', 'u.id', 'msg.user_id')
        .orderBy('created_at', 'desc')
        .limit(50)
        .where('msg.is_deleted', false)
        .select([
            'msg.message',
            'msg.id as msg_id',
            'u.Name',
            'u.email_id as email_id',
            'u.id as user_id',
            db.raw('concat(date(created_at),\' \',to_char(created_at, \'HH24:MI\')) as time_stamp'),
            db.raw('case when u.id = ' + user_id + ' then true else false end as msg_by_user')
        ]);
}