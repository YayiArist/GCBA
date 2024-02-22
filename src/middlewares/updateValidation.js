const { ClientError } = require("../../src/utils/errors");

//aqui se validan los datos antes de enviarlos al controller

module.exports = (req, res, next) => {

  const { name, description, price, quantity } = req.body;
  const { id } = req.params;

  if (id) {
    req.productData={name, description, price, quantity}
  } else {
    throw new ClientError(
      'product ID required',
      500
    );
  }

  return next();
};
