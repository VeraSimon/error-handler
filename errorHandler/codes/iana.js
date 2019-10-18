// https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml

const iana = {
   h100: {
      httpStatus: '100',
      title: 'Continue',
      description: '',
      recoveryInstructions: ''
   },
   h101: {
      httpStatus: '101',
      title: 'Switching Protocols',
      description: '',
      recoveryInstructions: ''
   },
   h102: {
      httpStatus: '102',
      title: 'Processing',
      description: '',
      recoveryInstructions: ''
   },
   h103: {
      httpStatus: '103',
      title: 'Early Hints',
      description: '',
      recoveryInstructions: ''
   },
   h200: {
      httpStatus: '200',
      title: 'OK',
      description: '',
      recoveryInstructions: ''
   },
   h201: {
      httpStatus: '201',
      title: 'Created',
      description: '',
      recoveryInstructions: ''
   },
   h202: {
      httpStatus: '202',
      title: 'Accepted',
      description: '',
      recoveryInstructions: ''
   },
   h203: {
      httpStatus: '203',
      title: 'Non-Authoritative Information',
      description: '',
      recoveryInstructions: ''
   },
   h204: {
      httpStatus: '204',
      title: 'No Content',
      description: '',
      recoveryInstructions: ''
   },
   h205: {
      httpStatus: '205',
      title: 'Reset Content',
      description: '',
      recoveryInstructions: ''
   },
   h206: {
      httpStatus: '206',
      title: 'Partial Content',
      description: '',
      recoveryInstructions: ''
   },
   h207: {
      httpStatus: '207',
      title: 'Multi-Status',
      description: '',
      recoveryInstructions: ''
   },
   h208: {
      httpStatus: '208',
      title: 'Already Reported',
      description: '',
      recoveryInstructions: ''
   },
   h226: {
      httpStatus: '226',
      title: 'IM Used',
      description: '',
      recoveryInstructions: ''
   },
   h300: {
      httpStatus: '300',
      title: 'Multiple Choices',
      description: '',
      recoveryInstructions: ''
   },
   h301: {
      httpStatus: '301',
      title: 'Moved Permanently',
      description: '',
      recoveryInstructions: ''
   },
   h302: {
      httpStatus: '302',
      title: 'Found',
      description: '',
      recoveryInstructions: ''
   },
   h303: {
      httpStatus: '303',
      title: 'See Other',
      description: '',
      recoveryInstructions: ''
   },
   h304: {
      httpStatus: '304',
      title: 'Not Modified',
      description: '',
      recoveryInstructions: ''
   },
   h305: {
      httpStatus: '305',
      title: 'Use Proxy',
      description: '',
      recoveryInstructions: ''
   },
   h306: {
      httpStatus: '306',
      title: '(Unused)',
      description: 'This code is no longer used and has been reserved.',
      recoveryInstructions:
         'Please contact the Administrator about updating their code.'
   },
   h307: {
      httpStatus: '307',
      title: 'Temporary Redirect',
      description: '',
      recoveryInstructions: ''
   },
   h308: {
      httpStatus: '308',
      title: 'Permanent Redirect',
      description: '',
      recoveryInstructions: ''
   },
   h400: {
      httpStatus: '400',
      title: 'Bad Request',
      description: 'All object properties must be provided',
      recoveryInstructions:
         'Please ensure all required object properties are in your request and try again.'
   },
   h401: {
      httpStatus: '401',
      title: 'Unauthorized',
      description: 'The credentials provided were invalid',
      recoveryInstructions:
         'Please ensure you have entered valid credentials and try again.'
   },
   h402: {
      httpStatus: '402',
      title: 'Payment Required',
      description: '',
      recoveryInstructions: ''
   },
   h403: {
      httpStatus: '403',
      title: 'Forbidden',
      description: 'The request was valid, but the server is refusing action',
      recoveryInstructions:
         'The user might not have the necessary permissions for a resource, or may need an account of some sort.'
   },
   h404: {
      httpStatus: '404',
      title: 'Not Found',
      description: 'The server was unable to find the specified object',
      recoveryInstructions:
         'Please ensure you specify an existing object and try again.'
   },
   h405: {
      httpStatus: '405',
      title: 'Method Not Allowed',
      description:
         'A request method is not supported for the requested resource',
      recoveryInstructions:
         'Please ensure your HTTP request is of the proper type and try again.'
   },
   h406: {
      httpStatus: '406',
      title: 'Not Acceptable',
      description: '',
      recoveryInstructions: ''
   },
   h407: {
      httpStatus: '407',
      title: 'Proxy Authentication Required',
      description: '',
      recoveryInstructions: ''
   },
   h408: {
      httpStatus: '408',
      title: 'Request Timeout',
      description: '',
      recoveryInstructions: ''
   },
   h409: {
      httpStatus: '409',
      title: 'Conflict',
      description: '',
      recoveryInstructions: ''
   },
   h410: {
      httpStatus: '410',
      title: 'Gone',
      description: '',
      recoveryInstructions: ''
   },
   h411: {
      httpStatus: '411',
      title: 'Length Required',
      description: '',
      recoveryInstructions: ''
   },
   h412: {
      httpStatus: '412',
      title: 'Precondition Failed',
      description: '',
      recoveryInstructions: ''
   },
   h413: {
      httpStatus: '413',
      title: 'Payload Too Large',
      description: '',
      recoveryInstructions: ''
   },
   h414: {
      httpStatus: '414',
      title: 'URI Too Long',
      description: '',
      recoveryInstructions: ''
   },
   h415: {
      httpStatus: '415',
      title: 'Unsupported Media Type',
      description: '',
      recoveryInstructions: ''
   },
   h416: {
      httpStatus: '416',
      title: 'Range Not Satisfiable',
      description: '',
      recoveryInstructions: ''
   },
   h417: {
      httpStatus: '417',
      title: 'Expectation Failed',
      description: '',
      recoveryInstructions: ''
   },
   h421: {
      httpStatus: '421',
      title: 'Misdirected Request',
      description: '',
      recoveryInstructions: ''
   },
   h422: {
      httpStatus: '422',
      title: 'Unprocessable Entity',
      description:
         'The request was well-formed but was unable to be followed due to semantic errors.',
      recoveryInstructions:
         'Make sure your request includes all expected properties and try again.'
   },
   h423: {
      httpStatus: '423',
      title: 'Locked',
      description: '',
      recoveryInstructions: ''
   },
   h424: {
      httpStatus: '424',
      title: 'Failed Dependency',
      description: '',
      recoveryInstructions: ''
   },
   h425: {
      httpStatus: '425',
      title: 'Too Early',
      description: '',
      recoveryInstructions: ''
   },
   h426: {
      httpStatus: '426',
      title: 'Upgrade Required',
      description: '',
      recoveryInstructions: ''
   },
   h428: {
      httpStatus: '428',
      title: 'Precondition Required',
      description: '',
      recoveryInstructions: ''
   },
   h429: {
      httpStatus: '429',
      title: 'Too Many Requests',
      description: '',
      recoveryInstructions: ''
   },
   h431: {
      httpStatus: '431',
      title: 'Request Header Fields Too Large',
      description: '',
      recoveryInstructions: ''
   },
   h451: {
      httpStatus: '451',
      title: 'Unavailable For Legal Reasons',
      description: '',
      recoveryInstructions: ''
   },
   h500: {
      httpStatus: '500',
      title: 'Internal Server Error',
      description:
         'The server is having trouble communicating with the database',
      recoveryInstructions:
         'Please provide the server administrator the provided errorOutput and/or try again later.'
   },
   h501: {
      httpStatus: '501',
      title: 'Not Implemented',
      description: '',
      recoveryInstructions: ''
   },
   h502: {
      httpStatus: '502',
      title: 'Bad Gateway',
      description: '',
      recoveryInstructions: ''
   },
   h503: {
      httpStatus: '503',
      title: 'Service Unavailable',
      description: '',
      recoveryInstructions: ''
   },
   h504: {
      httpStatus: '504',
      title: 'Gateway Timeout',
      description: '',
      recoveryInstructions: ''
   },
   h505: {
      httpStatus: '505',
      title: 'HTTP Version Not Supported',
      description: '',
      recoveryInstructions: ''
   },
   h506: {
      httpStatus: '506',
      title: 'Variant Also Negotiates',
      description: '',
      recoveryInstructions: ''
   },
   h507: {
      httpStatus: '507',
      title: 'Insufficient Storage',
      description: '',
      recoveryInstructions: ''
   },
   h508: {
      httpStatus: '508',
      title: 'Loop Detected',
      description: '',
      recoveryInstructions: ''
   },
   h510: {
      httpStatus: '510',
      title: 'Not Extended',
      description: '',
      recoveryInstructions: ''
   },
   h511: {
      httpStatus: '511',
      title: 'Network Authentication Required',
      description: '',
      recoveryInstructions: ''
   }
};

module.exports = {
   iana
};
