export default {
  routePrefix: '/docs',
  swagger: {
    info: {
      title: 'TAJ API',
      description: 'TAJ API documentation',
      version: '0.0.1',
    },
    schemes: ['http'],
    consumes: ['application/json'],
    produces: ['application/json'],
    host:'localhost',
    
  },
  exposeRoute: true,
};
