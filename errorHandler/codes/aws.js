// https://docs.aws.amazon.com/elasticloadbalancing/latest/application/load-balancer-troubleshooting.html

const aws = {
   h460: {
      httpStatus: '460',
      title: 'Client Closed The Connection',
      description: '',
      recoveryInstructions: ''
   },
   h463: {
      httpStatus: '463',
      title: 'More Than 30 X-Forwarded-For IP Addresses',
      description: '',
      recoveryInstructions: ''
   },
   h561: {
      httpStatus: '561',
      title: 'Unauthorized',
      description: '',
      recoveryInstructions: ''
   }
};

module.exports = {
   aws
};
