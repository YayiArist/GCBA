const { catchedAsync } = require("../utils");

module.exports = {
  createProduct: catchedAsync(require("./products/createProduct")),
  getAllProducts: catchedAsync(require("./products/getAllProducts")),
  updateProduct: catchedAsync(require("./products/updateProduct")),
  deleteProduct: catchedAsync(require("./products/deleteProduct"))

  
};
