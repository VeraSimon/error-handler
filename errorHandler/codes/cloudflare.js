// https://support.cloudflare.com/hc/en-us/articles/115003011431-Troubleshooting-Cloudflare-5XX-errors

const cloudflare = {
   h520: {
      httpStatus: '520',
      title: 'Unknown Error',
      description: '',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: []
   },
   h521: {
      httpStatus: '521',
      title: 'Web Server Is Down',
      description: '',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: []
   },
   h522: {
      httpStatus: '522',
      title: 'Connection Timed Out',
      description: '',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: []
   },
   h523: {
      httpStatus: '523',
      title: 'Origin Is Unreachable',
      description: '',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: []
   },
   h524: {
      httpStatus: '524',
      title: 'A Timeout Occurred',
      description: '',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: []
   },
   h525: {
      httpStatus: '525',
      title: 'SSL Handshake Failed',
      description: '',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: []
   },
   h526: {
      httpStatus: '526',
      title: 'Invalid SSL Certificate',
      description: '',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: []
   },
   h527: {
      httpStatus: '527',
      title: 'Railgun Error',
      description: '',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: []
   },
   h530: {
      httpStatus: '530',
      title: 'Origin DNS Error',
      description: '',
      recoveryInstructions: '',
      extraHeaders: [],
      extraBody: []
   }
};

module.exports = {
   cloudflare
};
