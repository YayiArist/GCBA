require('dotenv').config();
const server = require('./src/server');
const { conn } = require('./src/database/index');
const  PORT = process.env.PORT || 3001


conn.sync({ force: false }).then(() => {
 
  server.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
});