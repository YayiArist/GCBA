const { Producto } = require("../../database/index");
const { response } = require("../../utils");

module.exports = async (req, res) => {
  const { id } = req.params;

  let existingProduct= await Producto.findByPk(id);
  if (!existingProduct) {
    response(res, 404, "Product not found");
  } else {
    await existingProduct.destroy();
    response(res, 200, "Product deleted successfully", existingProduct);
  }
};