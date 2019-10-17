// https://support.microsoft.com/en-us/help/943891/the-http-status-code-in-iis-7-0-iis-7-5-and-iis-8-0

// h###_#: {
//    httpStatus: '###.#',
//    title: '',
//    description: '',
//    recoveryInstructions: ''
// }

const iis = {
   h400_1: {
      httpStatus: '400.1',
      title: 'Invalid Destination Header',
      description: '',
      recoveryInstructions: ''
   },
   h400_2: {
      httpStatus: '400.2',
      title: 'Invalid Depth Header',
      description: '',
      recoveryInstructions: ''
   },
   h400_3: {
      httpStatus: '400.3',
      title: 'Invalid If Header',
      description: '',
      recoveryInstructions: ''
   },
   h400_4: {
      httpStatus: '400.4',
      title: 'Invalid Overwrite Header',
      description: '',
      recoveryInstructions: ''
   },
   h400_5: {
      httpStatus: '400.5',
      title: 'Invalid Translate Header',
      description: '',
      recoveryInstructions: ''
   },
   h400_6: {
      httpStatus: '400.6',
      title: 'Invalid Request Body',
      description: '',
      recoveryInstructions: ''
   },
   h400_7: {
      httpStatus: '400.7',
      title: 'Invalid Content Length',
      description: '',
      recoveryInstructions: ''
   },
   h400_8: {
      httpStatus: '400.8',
      title: 'Invalid Timeout',
      description: '',
      recoveryInstructions: ''
   },
   h400_9: {
      httpStatus: '400.9',
      title: 'Invalid Lock Token',
      description: '',
      recoveryInstructions: ''
   },
   h401_1: {
      httpStatus: '401.1',
      title: 'Logon failed',
      description: '',
      recoveryInstructions: ''
   },
   h401_2: {
      httpStatus: '401.2',
      title: 'Logon failed due to server configuration',
      description: '',
      recoveryInstructions: ''
   },
   h401_3: {
      httpStatus: '401.3',
      title: 'Unauthorized due to ACL on resource',
      description: '',
      recoveryInstructions: ''
   },
   h401_4: {
      httpStatus: '401.4',
      title: 'Authorization failed by filter',
      description: '',
      recoveryInstructions: ''
   },
   h401_5: {
      httpStatus: '401.5',
      title: 'Authorization failed by ISAPI/CGI application',
      description: '',
      recoveryInstructions: ''
   },
   h401_501: {
      httpStatus: '401.501',
      title:
         'Access Denied: Too many requests from the same client IP; Dynamic IP Restriction Concurrent request rate limit reached',
      description: '',
      recoveryInstructions: ''
   },
   h401_502: {
      httpStatus: '401.502',
      title:
         'Forbidden: Too many requests from the same client IP; Dynamic IP Restriction Maximum request rate limit reached',
      description: '',
      recoveryInstructions: ''
   },
   h401_503: {
      httpStatus: '401.503',
      title:
         'Access Denied: the IP address is included in the Deny list of IP Restriction',
      description: '',
      recoveryInstructions: ''
   },
   h401_504: {
      httpStatus: '401.504',
      title:
         'Access Denied: the host name is included in the Deny list of IP Restriction',
      description: '',
      recoveryInstructions: ''
   },
   h403_1: {
      httpStatus: '403.1',
      title: 'Execute access forbidden',
      description: '',
      recoveryInstructions: ''
   },
   h403_2: {
      httpStatus: '403.2',
      title: 'Read access forbidden',
      description: '',
      recoveryInstructions: ''
   },
   h403_3: {
      httpStatus: '403.3',
      title: 'Write access forbidden',
      description: '',
      recoveryInstructions: ''
   },
   h403_4: {
      httpStatus: '403.4',
      title: 'SSL required',
      description: '',
      recoveryInstructions: ''
   },
   h403_5: {
      httpStatus: '403.5',
      title: 'SSL 128 required',
      description: '',
      recoveryInstructions: ''
   },
   h403_6: {
      httpStatus: '403.6',
      title: 'IP address rejected',
      description: '',
      recoveryInstructions: ''
   },
   h403_7: {
      httpStatus: '403.7',
      title: 'Client certificate required',
      description: '',
      recoveryInstructions: ''
   },
   h403_8: {
      httpStatus: '403.8',
      title: 'Site access denied',
      description: '',
      recoveryInstructions: ''
   },
   h403_9: {
      httpStatus: '403.9',
      title:
         'Forbidden: Too many clients are trying to connect to the web server',
      description: '',
      recoveryInstructions: ''
   },
   h403_10: {
      httpStatus: '403.10',
      title: 'Forbidden: web server is configured to deny Execute access',
      description: '',
      recoveryInstructions: ''
   },
   h403_11: {
      httpStatus: '403.11',
      title: 'Forbidden: Password has been changed',
      description: '',
      recoveryInstructions: ''
   },
   h403_12: {
      httpStatus: '403.12',
      title: 'Mapper denied access',
      description: '',
      recoveryInstructions: ''
   },
   h403_13: {
      httpStatus: '403.13',
      title: 'Client certificate revoked',
      description: '',
      recoveryInstructions: ''
   },
   h403_14: {
      httpStatus: '403.14',
      title: 'Directory listing denied',
      description: '',
      recoveryInstructions: ''
   },
   h403_15: {
      httpStatus: '403.15',
      title:
         'Forbidden: Client access licenses have exceeded limits on the web server',
      description: '',
      recoveryInstructions: ''
   },
   h403_16: {
      httpStatus: '403.16',
      title: 'Client certificate is untrusted or invalid',
      description: '',
      recoveryInstructions: ''
   },
   h403_17: {
      httpStatus: '403.17',
      title: 'Client certificate has expired or is not yet valid',
      description: '',
      recoveryInstructions: ''
   },
   h403_18: {
      httpStatus: '403.18',
      title: 'Cannot execute requested URL in the current application pool',
      description: '',
      recoveryInstructions: ''
   },
   h403_19: {
      httpStatus: '403.19',
      title:
         'Cannot execute CGI applications for the client in this application pool',
      description: '',
      recoveryInstructions: ''
   },
   h403_20: {
      httpStatus: '403.20',
      title: 'Forbidden: Passport logon failed',
      description: '',
      recoveryInstructions: ''
   },
   h403_21: {
      httpStatus: '403.21',
      title: 'Forbidden: Source access denied',
      description: '',
      recoveryInstructions: ''
   },
   h403_22: {
      httpStatus: '403.22',
      title: 'Forbidden: Infinite depth is denied',
      description: '',
      recoveryInstructions: ''
   },
   h403_501: {
      httpStatus: '403.501',
      title:
         'Forbidden: Too many requests from the same client IP; Dynamic IP Restriction Concurrent request rate limit reached',
      description: '',
      recoveryInstructions: ''
   },
   h403_502: {
      httpStatus: '403.502',
      title:
         'Forbidden: Too many requests from the same client IP; Dynamic IP Restriction Maximum request rate limit reached',
      description: '',
      recoveryInstructions: ''
   },
   h403_503: {
      httpStatus: '403.503',
      title:
         'Forbidden: the IP address is included in the Deny list of IP Restriction',
      description: '',
      recoveryInstructions: ''
   },
   h403_504: {
      httpStatus: '403.504',
      title:
         'Forbidden: the host name is included in the Deny list of IP Restriction',
      description: '',
      recoveryInstructions: ''
   },
   h404_0: {
      httpStatus: '404.0',
      title: 'Not found',
      description: '',
      recoveryInstructions: ''
   },
   h404_1: {
      httpStatus: '404.1',
      title: 'Site Not Found',
      description: '',
      recoveryInstructions: ''
   },
   h404_2: {
      httpStatus: '404.2',
      title: 'ISAPI or CGI restriction',
      description: '',
      recoveryInstructions: ''
   },
   h404_3: {
      httpStatus: '404.3',
      title: 'MIME type restriction',
      description: '',
      recoveryInstructions: ''
   },
   h404_4: {
      httpStatus: '404.4',
      title: 'No handler configured',
      description: '',
      recoveryInstructions: ''
   },
   h404_5: {
      httpStatus: '404.5',
      title: 'Denied by request filtering configuration',
      description: '',
      recoveryInstructions: ''
   },
   h404_6: {
      httpStatus: '404.6',
      title: 'Verb denied',
      description: '',
      recoveryInstructions: ''
   },
   h404_7: {
      httpStatus: '404.7',
      title: 'File extension denied',
      description: '',
      recoveryInstructions: ''
   },
   h404_8: {
      httpStatus: '404.8',
      title: 'Hidden namespace',
      description: '',
      recoveryInstructions: ''
   },
   h404_9: {
      httpStatus: '404.9',
      title: 'File attribute hidden',
      description: '',
      recoveryInstructions: ''
   },
   h404_10: {
      httpStatus: '404.10',
      title: 'Request header too long',
      description: '',
      recoveryInstructions: ''
   },
   h404_11: {
      httpStatus: '404.11',
      title: 'Request contains double escape sequence',
      description: '',
      recoveryInstructions: ''
   },
   h404_12: {
      httpStatus: '404.12',
      title: 'Request contains high-bit characters',
      description: '',
      recoveryInstructions: ''
   },
   h404_13: {
      httpStatus: '404.13',
      title: 'Content length too large',
      description: '',
      recoveryInstructions: ''
   },
   h404_14: {
      httpStatus: '404.14',
      title: 'Request URL too long',
      description: '',
      recoveryInstructions: ''
   },
   h404_15: {
      httpStatus: '404.15',
      title: 'Query string too long',
      description: '',
      recoveryInstructions: ''
   },
   h404_16: {
      httpStatus: '404.16',
      title: 'DAV request sent to the static file handler',
      description: '',
      recoveryInstructions: ''
   },
   h404_17: {
      httpStatus: '404.17',
      title:
         'Dynamic content mapped to the static file handler via a wildcard MIME mapping',
      description: '',
      recoveryInstructions: ''
   },
   h404_18: {
      httpStatus: '404.18',
      title: 'Querystring sequence denied',
      description: '',
      recoveryInstructions: ''
   },
   h404_19: {
      httpStatus: '404.19',
      title: 'Denied by filtering rule',
      description: '',
      recoveryInstructions: ''
   },
   h404_20: {
      httpStatus: '404.20',
      title: 'Too Many URL Segments',
      description: '',
      recoveryInstructions: ''
   },
   h404_501: {
      httpStatus: '404.501',
      title:
         'Not Found: Too many requests from the same client IP; Dynamic IP Restriction Concurrent request rate limit reached',
      description: '',
      recoveryInstructions: ''
   },
   h404_502: {
      httpStatus: '404.502',
      title:
         'Not Found: Too many requests from the same client IP; Dynamic IP Restriction Maximum request rate limit reached',
      description: '',
      recoveryInstructions: ''
   },
   h404_503: {
      httpStatus: '404.503',
      title:
         'Not Found: the IP address is included in the Deny list of IP Restriction',
      description: '',
      recoveryInstructions: ''
   },
   h404_504: {
      httpStatus: '404.504',
      title:
         'Not Found: the host name is included in the Deny list of IP Restriction',
      description: '',
      recoveryInstructions: ''
   },
   h500_0: {
      httpStatus: '500.0',
      title: 'Module or ISAPI error occurred',
      description: '',
      recoveryInstructions: ''
   },
   h500_11: {
      httpStatus: '500.11',
      title: 'Application is shutting down on the web server',
      description: '',
      recoveryInstructions: ''
   },
   h500_12: {
      httpStatus: '500.12',
      title: 'Application is busy restarting on the web server',
      description: '',
      recoveryInstructions: ''
   },
   h500_13: {
      httpStatus: '500.13',
      title: 'Web server is too busy',
      description: '',
      recoveryInstructions: ''
   },
   h500_15: {
      httpStatus: '500.15',
      title: 'Direct requests for Global.asax are not allowed',
      description: '',
      recoveryInstructions: ''
   },
   h500_19: {
      httpStatus: '500.19',
      title: 'Configuration data is invalid',
      description: '',
      recoveryInstructions: ''
   },
   h500_21: {
      httpStatus: '500.21',
      title: 'Module not recognized',
      description: '',
      recoveryInstructions: ''
   },
   h500_22: {
      httpStatus: '500.22',
      title:
         'An ASP.NET httpModules configuration does not apply in Managed Pipeline mode',
      description: '',
      recoveryInstructions: ''
   },
   h500_23: {
      httpStatus: '500.23',
      title:
         'An ASP.NET httpHandlers configuration does not apply in Managed Pipeline mode',
      description: '',
      recoveryInstructions: ''
   },
   h500_24: {
      httpStatus: '500.24',
      title:
         'An ASP.NET impersonation configuration does not apply in Managed Pipeline mode',
      description: '',
      recoveryInstructions: ''
   },
   h500_50: {
      httpStatus: '500.50',
      title:
         'A rewrite error occurred during RQ_BEGIN_REQUEST notification handling. A configuration or inbound rule execution error occurred',
      description: '',
      recoveryInstructions: ''
   },
   h500_51: {
      httpStatus: '500.51',
      title:
         'A rewrite error occurred during GL_PRE_BEGIN_REQUEST notification handling. A global configuration or global rule execution error occurred',
      description: '',
      recoveryInstructions: ''
   },
   h500_52: {
      httpStatus: '500.52',
      title:
         'A rewrite error occurred during RQ_SEND_RESPONSE notification handling. An outbound rule execution occurred',
      description: '',
      recoveryInstructions: ''
   },
   h500_53: {
      httpStatus: '500.53',
      title:
         'A rewrite error occurred during RQ_RELEASE_REQUEST_STATE notification handling. An outbound rule execution error occurred. The rule is configured to be executed before the output user cache gets updated',
      description: '',
      recoveryInstructions: ''
   },
   h500_100: {
      httpStatus: '500.100',
      title: 'Internal ASP error',
      description: '',
      recoveryInstructions: ''
   },
   h502_1: {
      httpStatus: '502.1',
      title: 'CGI application timeout',
      description: '',
      recoveryInstructions: ''
   },
   h502_2: {
      httpStatus: '502.2',
      title: 'Bad gateway: Premature Exit',
      description: '',
      recoveryInstructions: ''
   },
   h502_3: {
      httpStatus: '502.3',
      title: 'Bad Gateway: Forwarder Connection Error (ARR)',
      description: '',
      recoveryInstructions: ''
   },
   h502_4: {
      httpStatus: '502.4',
      title: 'Bad Gateway: No Server (ARR)',
      description: '',
      recoveryInstructions: ''
   },
   h503_0: {
      httpStatus: '503.0',
      title: 'Application pool unavailable',
      description: '',
      recoveryInstructions: ''
   },
   h503_2: {
      httpStatus: '503.2',
      title: 'Concurrent request limit exceeded',
      description: '',
      recoveryInstructions: ''
   },
   h503_3: {
      httpStatus: '503.3',
      title: 'ASP.NET queue full',
      description: '',
      recoveryInstructions: ''
   },
   h503_4: {
      httpStatus: '503.4',
      title: 'FastCGI queue full',
      description: '',
      recoveryInstructions: ''
   }
};

module.exports = {
   iis
};
