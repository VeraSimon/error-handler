// TODO: Refactor as an Express.js middleware handler using codes from /codes
let isDotEnv = true;
try {
   require('dotenv').config();
} catch (e) {
   isDotEnv = false;
   console.log('INFO: dotenv is not installed.');
}

const { errors } = require('./errors');

const debugging = process.env.DEBUGGING.toLowerCase() === 'true' || false;

// express.js middleware
const errorHandler = (err, req, res, next) => {
   // err = [status, message, {optional KVPs to add to req.body}]
   // err[0] = HTTP status. Used in res.status().
   // err[1] = Arbitrary message provided by the function call. Assigned to ErrorOutput key.
   // Ex: next(["h404", "Oh no, your thing doesn't exist!"])
   // err[2] = (Optionally) add arbitrary KVPs to the body of the response, in case an existing frontend is expecting them.
   // Ex: next(["h500", "Database error.", {"message": "An unspecified database error ocurred."}])
   const status = err[0];
   const message = err[1];
   const kvps = err[2] || null;

   // ruh roh. "status" isn't in errors...
   if (!errors.hasOwnProperty(status))
      throw `Uncaught Exception! Please review:\n${err}`;

   // continue as normal
   if (!isDotEnv) {
      if (status === 'h500') console.error('Error:\n', message);
   } else {
      if (status === 'h500' && debugging === true)
         console.error('Error:\n', message);
   }
   const error = { ...errors[status], errorOutput: message };
   if (kvps !== null && kvps !== undefined && typeof kvps === 'object') {
      for (let key in kvps) {
         error[key] = kvps[key];
      }
   }
   res.status(error.httpStatus).json(error);
};

// TODO: Split this off to a seperate handler/file
// just returns the JS object matching status with the specified message on errorOutput
const statusObj = (status, message, kvps) => {
   // status = http status
   // message = arbitrary message provided by the function call
   // kvps = Optional object of arbitrary key-value pairs to add to the returned error object
   if (!errors.hasOwnProperty(status)) {
      return { error: `HTTP status '${status}' not defined!`, status, message };
   } else {
      let error = { ...errors[status], errorOutput: message };
      if (kvps !== null && kvps !== undefined && typeof kvps === 'object') {
         for (let key in kvps) {
            error[key] = kvps[key];
         }
      }
      return error;
   }
};

module.exports = {
   errorHandler,
   statusObj
};
