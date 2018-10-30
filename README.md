# error-handler

Just a simple HTTP error handler middleware for express.js

## handlers.js/errorHandler

Drop the folder somewhere in your Express project, import errorHandler from handlers.js, then add `server.use(errorHandler)` or `route.use(errorHandler)` after your routes. The simplest examples I can think of are as follows:

```javascript
const express = require('express');

const { errorHandler } = require('./errorHandler/handlers');

const server = express();
server.use(express.json());

server.get('/hello/:name', (req, res, next) => {
	const { name } = req.params;
	if (name === 'Vera' || name === 'vera') {
		res.status(200).json({ message: `Hello ${name}!` });
	} else {
		// Base errorHandler call
		next(['h404', `Why are you here ${name}?`]);
	}
});

server.get('/goodbye/:name', (req, res, next) => {
	const { name } = req.params;
	if (name !== 'Joja Cola') {
		res.status(200).json({ message: `Goodbye ${name}! Have a nice day!` });
	} else {
		// errorHandler with optional KVPs passed
		next(['h404', `Why are you here ${name}?`, { message: `${name} is the worst`, error: `No ${name} allowed!` }]);
	}
});

server.use((req, res, next) => {
	next(['h404', `The requested path '${req.path}' doesn't exist.`]);
});

server.use(errorHandler);

const port = 8080;
server.listen(port, () => console.log(`\n~~~ server listening on port ${port} ~~~\n`));
```

## handlers.js/statusObj

handlers.js also has a `statusObj` function that takes in a status and message, and returns the status object that would be returned to the browser in the example above.

### _Base statusObj example_

```javascript
statusObj('h404', 'Where is the thing?!');
```

would return

```javascript
{
	httpStatus: 404,
	title: 'Object not found',
	description: 'The server was unable to find the specified object',
	recoveryInstructions: 'Please ensure you specify an existing object and try again.',
	errorOutput: 'Where is the thing?!'
}
```

### _statusObj example with optional KVP_

```javascript
statusObj('h500', 'The database fell over :(', { error: 'Poor database ;_;' });
```

would return

```javascript
{
	httpStatus: 404,
	title: 'Object not found',
	description: 'The server was unable to find the specified object',
	recoveryInstructions: 'Please ensure you specify an existing object and try again.',
	errorOutput: 'The database fell over :(',
	error: 'Poor database ;_;'
};
```

## errors.js/errors

You can find the full list of HTTP errors currently added in the errors.js file. It's currently just a large javascript object with sub-objects representing each status.
