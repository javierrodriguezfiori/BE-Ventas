export const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'BE-Compras',
      version: '1.0.0',
      description: 'Es el microservicio encargado del modulo de compras.',
    },
    servers: [
      {
        url: 'http://localhost:8081',
      },
    ],
  },
  apis: ['./src/routes/*.ts'],
}
