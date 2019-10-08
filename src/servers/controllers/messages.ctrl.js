exports.getInitialMessageLoad = getMessages;

let messageQuery = require('../queries/messages.query');
async function getMessages(req, res, next) {
    try {
        let messages = await messageQuery.get50Messages(req.user.id);
        return res.status(200).send({ success: true, data: messages });
    }
    catch (err) {
        console.log(err);
        return res.status(500).send({ success: false, msg: "Kuch toh fata hai" });
    }
}