const { errors } = require('./errors');

// express.js middleware
const errorHandler = (err, req, res, next) => {
	// err = [status, message, {optional KVPs to add to req.body}]
	// err[0] = HTTP status. Used in res.status().
	// err[1] = Arbitrary message provided by the function call. Assigned to ErrorOutput key.
	// err[2] = (Optionally) add arbitrary KVPs to the body of the response, in case an existing frontend is expecting them.
	// Ex: next(["h404", "Oh no, your thing doesn't exist!"])
	const status = err[0];
	const message = err[1];
	const kvps = err[2] || null;

	// ruh roh. "status" isn't in errors...
	if (!errors.hasOwnProperty(status)) throw `Uncaught Exception! Please review:\n${err}`;

	// continue as normal
	if (status === 'h500') console.error('Error:\n', message);
	const error = { ...errors[status], errorOutput: message };
	if (kvps !== null && kvps !== undefined && typeof kvps === 'object') {
		for (let key in kvps) {
			error[key] = kvps[key];
		}
	}
	res.status(error.httpStatus).json(error);
};

// just returns the JS object matching status with the specified message on errorOutput
const statusObj = (status, message, kvps) => {
	// status = http status
	// message = arbitrary message provided by the function call
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
