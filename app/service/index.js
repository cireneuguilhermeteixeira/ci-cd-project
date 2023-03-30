const moment = require('moment');

exports.getCurrentDateFormated = (date) => {
  const response = moment(date).format('MMMM D, YYYY - hh:mm:ss');
  return response;
};
