const { ClientError } = require("../../src/utils/errors");

//aqui se validan los datos antes de enviarlos al controller, la descripcion no es obligatoria

module.exports = (req, res, next) => {
  const { name, description, price, quantity}= req.body;
  console.log(req.body)

  if (name, price, quantity) {
    req.productData = {
      name,
      description,
      price,
      quantity
    };

    return next();
  } else {
    throw new ClientError("the product could not be created", 500);
    
  } 
};
