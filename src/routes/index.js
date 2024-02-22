const {Router} = require('express')
const controllers = require('../controllers')
const middlewares = require('../middlewares')

const router = Router()


//PRODUCTOS
router.post('/products', middlewares.productValidation, controllers.createProduct) // queda la ruta el middleware validador y luego el controlador en caso de que no haya error
router.get('/products', controllers.getAllProducts) 
router.put('/product/:id', middlewares.updateValidation, controllers.updateProduct)
router.delete('/products/:id', middlewares.deleteValidation, controllers.deleteProduct)


module.exports = router