require('dotenv').config();
const { Sequelize } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false }
);

const basename = path.basename(__filename);
const modelDefiners = [];
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    const modelName = file.replace('.js', ''); 
    modelDefiners.push({ name: modelName, model: require(path.join(__dirname, '/models', file)) });
  });

modelDefiners.forEach(({ name, model }) => model(sequelize));

let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// Definicion de modelo
const { Producto } = sequelize.models;


sequelize.authenticate().then(() => {
  console.log('Conexión con la base de datos correcta');
}).catch(err => {
  console.error('No se pudo conectar con la base de datos:', err);
});

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};