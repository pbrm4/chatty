let messagesQuery = require('../queries/messages.query');

exports.addMessageToDataStore = addMessage;
async function addMessage(data) {
    try {
        let message_obj = {
            user_id: data.user_id,
            message: data.message,
            created_at: data.time_stamp
        }
        await messagesQuery.addMessage(message_obj);
    }
    catch (err) {
        console.log(err);
    }
}