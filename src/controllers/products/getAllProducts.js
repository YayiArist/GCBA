const { Producto } = require("../../database/index");
const { response } = require("../../utils");

module.exports = async (req, res) => {
  console.log("controller GET")
  const products = await Producto.findAll();
  response(res, 200, products);
};
