const { ClientError } = require("../../src/utils/errors");

//aqui se validan los datos antes de enviarlos al controller

module.exports = (req, res, next) => {
  const {id} = req.params;

  if (id) {
    return next();
  } else {
    throw new ClientError("Product ID Needed", 500);
  }
};
