// https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
// https://tools.ietf.org/html/rfc7231#section-6

const iana = {
   h100: {
      // rfc7231
      httpStatus: '100',
      title: 'Continue',
      description: 'Initial request part received and awaiting final response.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h101: {
      // rfc7231
      // RFC 7231 - The server MUST generate an Upgrade header field in the
      // response that indicates which protocol(s) will be switched to
      // immediately after the empty line that terminates the 101 response.
      httpStatus: '101',
      title: 'Switching Protocols',
      description:
         'Server understands and is willing to comply with protocol switch request.',
      recoveryInstructions: '',
      extraHeaders: ['Upgrade'],
      extraBody: [],
   },
   h102: {
      httpStatus: '102',
      title: 'Processing',
      description: 'Server is still processing your WebDAV request.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h103: {
      httpStatus: '103',
      title: 'Early Hints',
      description: 'Server response headers prior to final HTTP message.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h200: {
      // rfc7231
      httpStatus: '200',
      title: 'OK',
      description: 'Request succeeded.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h201: {
      // rfc7231
      httpStatus: '201',
      title: 'Created',
      description: 'Request fulfilled and resource(s) created.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h202: {
      // rfc7231
      httpStatus: '202',
      title: 'Accepted',
      description: 'Request accepted for further processing.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h203: {
      // rfc7231
      httpStatus: '203',
      title: 'Non-Authoritative Information',
      description:
         'Request was successful, but payload was transformed from origin server.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h204: {
      // rfc7231
      // TODO: May have to nuke this response from the collection, as the server should have no additional content to send
      httpStatus: '204',
      title: 'No Content',
      description:
         'Request succeeded, but server has no further content to send.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h205: {
      // rfc7231
      // TODO: May have to nuke this response from the collection, as the server should have no additional content to send
      httpStatus: '205',
      title: 'Reset Content',
      description:
         'The server has fulfilled the request and desires the client to reset the view.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h206: {
      httpStatus: '206',
      title: 'Partial Content',
      description: 'Server has sent part of a resource.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h207: {
      httpStatus: '207',
      title: 'Multi-Status',
      description:
         'Multi-status WebDAV response. Process sub-statuses accordingly.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h208: {
      httpStatus: '208',
      title: 'Already Reported',
      description:
         'DAV binding(s) have already been enumerated in a prior multi-status response.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h226: {
      httpStatus: '226',
      title: 'IM Used',
      description:
         'Server is responding with one or more instance-manipulations applied to the current instance.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h300: {
      // rfc7231
      httpStatus: '300',
      title: 'Multiple Choices',
      description:
         'Target resource has more than one representation and requires the client to select prefered identifier(s)',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h301: {
      // rfc7231
      httpStatus: '301',
      title: 'Moved Permanently',
      description:
         'Resource has moved to a new URI, and the client should update their reference accordingly.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h302: {
      // rfc7231
      httpStatus: '302',
      title: 'Found',
      description:
         'Target resource is temporarily at a different URI, but client should continue pointing here.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h303: {
      // rfc7231
      httpStatus: '303',
      title: 'See Other',
      description: 'Server redirected the client to indirect response.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h304: {
      httpStatus: '304',
      title: 'Not Modified',
      description: '',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h305: {
      // rfc7231
      httpStatus: '305',
      title: 'Use Proxy',
      description:
         'This status code was previously used, but is now deprecated.',
      recoveryInstructions:
         'Please update to use the specified proxy or contact the Administrator about updating their code.',
      extraHeaders: [],
      extraBody: [],
   },
   h306: {
      // rfc7231
      httpStatus: '306',
      title: '(Unused)',
      description: 'This code is no longer used and has been reserved.',
      recoveryInstructions:
         'Please contact the Administrator about updating their code.',
      extraHeaders: [],
      extraBody: [],
   },
   h307: {
      // rfc7231
      httpStatus: '307',
      title: 'Temporary Redirect',
      description:
         'Target resource is temporarily at a different URI, but client should continue pointing here.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h308: {
      httpStatus: '308',
      title: 'Permanent Redirect',
      description:
         'Resource has moved to a new URI, and the client should update their reference accordingly.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h400: {
      // rfc7231
      httpStatus: '400',
      title: 'Bad Request',
      description:
         'The server is unable to process the request due to client error.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h401: {
      httpStatus: '401',
      title: 'Unauthorized',
      description:
         "The request is unauthorized and the client should check they've logged in.",
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h402: {
      // rfc7231
      httpStatus: '402',
      title: 'Payment Required',
      description: 'Reserved for future use.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h403: {
      // rfc7231
      httpStatus: '403',
      title: 'Forbidden',
      description:
         'Server understood the request, but refuses to authorize it.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h404: {
      // rfc7231
      httpStatus: '404',
      title: 'Not Found',
      description: 'Server did not find the requested resource.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h405: {
      // rfc7231
      httpStatus: '405',
      title: 'Method Not Allowed',
      description: 'Requested resource does not support request type.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h406: {
      // rfc7231
      httpStatus: '406',
      title: 'Not Acceptable',
      description:
         'Resource does not have an acceptable representation for the client.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h407: {
      httpStatus: '407',
      title: 'Proxy Authentication Required',
      description: 'Check that the client has logged into the proxy.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h408: {
      // rfc7231
      httpStatus: '408',
      title: 'Request Timeout',
      description:
         'Server did not receive a complete response from the client in time.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h409: {
      // rfc7231
      // Payload should respond with enough info for user to correct if possible
      httpStatus: '409',
      title: 'Conflict',
      description:
         "There's a conflict in the requested resource, such as concurrent edits.",
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h410: {
      // rfc7231
      httpStatus: '410',
      title: 'Gone',
      description:
         'The requested resource is no longer available, nor will it be again.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h411: {
      // rfc7231
      httpStatus: '411',
      title: 'Length Required',
      description: 'Client should specify the length in their request.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h412: {
      httpStatus: '412',
      title: 'Precondition Failed',
      description:
         "The server does not meet one or more of the header preconditions specified by the client's request.",
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h413: {
      // rfc7231
      httpStatus: '413',
      title: 'Payload Too Large',
      description: 'The client request is larger than the server will process.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h414: {
      // rfc7231
      httpStatus: '414',
      title: 'URI Too Long',
      description:
         'The URI provided is too long for the server to process. Consider changing to a POST.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h415: {
      // rfc7231
      httpStatus: '415',
      title: 'Unsupported Media Type',
      description: 'The server does not support the provided media type.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h416: {
      httpStatus: '416',
      title: 'Range Not Satisfiable',
      description: 'The range requested is not available.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h417: {
      // rfc7231
      httpStatus: '417',
      title: 'Expectation Failed',
      description:
         'Server cannot meet the requirements for the supplied Expect request header.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h418: {
      httpStatus: '418',
      title: "I'm a teapot",
      description: "I'm a teapot and cannot brew your coffee.",
      recoveryInstructions:
         'Get a coffee maker to brew your coffee. A mokapot or french press will work too, as will many other devices.',
      extraHeaders: [],
      extraBody: [],
   },
   h421: {
      httpStatus: '421',
      title: 'Misdirected Request',
      description:
         'The server specified cannot produce a response to this request.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h422: {
      httpStatus: '422',
      title: 'Unprocessable Entity',
      description:
         'The server cannot process the request due to semantic errors.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h423: {
      httpStatus: '423',
      title: 'Locked',
      description: 'The requested resource is locked by another process.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h424: {
      httpStatus: '424',
      title: 'Failed Dependency',
      description: 'Prior request this one depended on failed.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h425: {
      httpStatus: '425',
      title: 'Too Early',
      description:
         'Server is unwilling to process this request because it might be replayed.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h426: {
      // rfc7231
      httpStatus: '426',
      title: 'Upgrade Required',
      description: 'Client should upgrade to the specified protocol.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h428: {
      httpStatus: '428',
      title: 'Precondition Required',
      description: 'Server requires the request to be conditional.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h429: {
      httpStatus: '429',
      title: 'Too Many Requests',
      description:
         'Client has sent too many requests to the server in too short of a time period.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h431: {
      httpStatus: '431',
      title: 'Request Header Fields Too Large',
      description:
         'Server refuses to process the request because one or more header fields are too large.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h451: {
      httpStatus: '451',
      title: 'Unavailable For Legal Reasons',
      description:
         'The server operator has received a legal demand to remove access to the requested resource.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h500: {
      // rfc7231
      httpStatus: '500',
      title: 'Internal Server Error',
      description: 'The server encountered an unexpected condition.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h501: {
      // rfc7231
      httpStatus: '501',
      title: 'Not Implemented',
      description:
         'The server does not recognize the request or cannot otherwise fulfill it as requested.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h502: {
      // rfc7231
      httpStatus: '502',
      title: 'Bad Gateway',
      description: 'The upstream server sent an invalid response.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h503: {
      // rfc7231
      httpStatus: '503',
      title: 'Service Unavailable',
      description: 'The server is unavailable to handle the request.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h504: {
      // rfc7231
      httpStatus: '504',
      title: 'Gateway Timeout',
      description: 'The upstream server did not respond in a timely manner.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h505: {
      // rfc7231
      httpStatus: '505',
      title: 'HTTP Version Not Supported',
      description: 'The server does not support the HTTP protocol requested.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h506: {
      httpStatus: '506',
      title: 'Variant Also Negotiates',
      description: 'The server got into a loop trying to serve the request.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h507: {
      httpStatus: '507',
      title: 'Insufficient Storage',
      description: 'Insufficient WebDAV storage.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h508: {
      httpStatus: '508',
      title: 'Loop Detected',
      description: 'WebDAV infinite loop detected.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h510: {
      httpStatus: '510',
      title: 'Not Extended',
      description:
         'The request requires further extension to fulfill the request.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
   h511: {
      httpStatus: '511',
      title: 'Network Authentication Required',
      description:
         'The server proxy requires authentication before fulfilling the request.',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: [],
   },
};

module.exports = {
   iana,
};
