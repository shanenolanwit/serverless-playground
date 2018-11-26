'use strict';

var swapCase = require('swap-case')

module.exports.swap = async (event, context) => {
  console.log(event);
  console.log(event.pathParameters);
  var message = swapCase(event.pathParameters.word)
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: message,
      input: event,
    }),
  };

};
