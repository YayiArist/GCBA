const { Producto } = require("../../database/index");
const { response } = require("../../utils");

module.exports = async (req, res) => {
  const { name, description, quantity, price } = req.productData;
  const { id } = req.params;

  const existingProduct = await Producto.findByPk(id);

  if (existingProduct) {
    let updatedProduct = await existingProduct.update({
      nombre: name,
      descripcion: description,
      cantidad: quantity,
      precio: price,
    });
    response(res, 200, updatedProduct);
  } else {
    response(res, 404, "Product not found");
  }
};