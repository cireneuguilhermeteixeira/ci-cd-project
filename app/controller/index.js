const srvc = require('../service');


exports.getInfo = async (req, resp) => {
    resp.status(201).json(
    {
        status: `ok`,
        message: `This endpoint should return some information`,
        currentDate:  srvc.getCurrentDateFormated(new Date())
    });
}
