exports.get50Messages = function () {
    return db.from('messages as msg')
        .innerJoin('users as u', 'u.id', 'msg.user_id')
        .orderBy('created_at', desc)
        .limit(50)
        .select([
            
        ]);
}