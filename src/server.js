const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const server = express();

server.use(morgan('dev'));
server.use(express.json());
server.use(cors())


server.use('/api', require('./routes')); 


server.use('*', (req, res) => {
  res.status(404).send("Not Found");
});

// Error handler
server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({
    error: true,
    message: err.message
  });
});


module.exports = server;