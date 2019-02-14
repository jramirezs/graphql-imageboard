require('dotenv').config();

const server = require('./server');

server.start(
  {
    cors: {
      origin: process.env.FRONTEND_URL,
      credentials: true,
    },
  },
  info => {
    console.log(`Server is now running on port http://localhost:${info.port}`);
  }
);
