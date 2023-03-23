

exports.getInfo = async (req, resp) => {
    resp.status(201).json(
    {
        status: `ok`,
        message: `This endpoint should return some information`,
        currentDate: new Date()
    }
    );}
