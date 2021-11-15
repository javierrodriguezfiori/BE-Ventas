export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BE-Ventas',
      version: '1.0.0',
      description: 'Es el microservicio encargado del modulo de ventas.',
    },
    servers: [
      {
        url: 'http://localhost:8082',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
}
