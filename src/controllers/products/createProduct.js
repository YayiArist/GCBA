const { Producto } = require("../../database/index");
const { response } = require("../../utils");

module.exports = async (req, res) => {
  console.log("controller Post");
  const { name, description, price, quantity } = req.productData;
  console.log("sisehizo")
  const newProduct = await Producto.create({
    nombre: name,
    descripcion: description,
    precio: price,
    cantidad: quantity,
  });

  response(res, 200, newProduct);
};

