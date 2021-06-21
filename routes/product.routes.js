const router = require('express').Router();
const productCtrl = require('../controllers/product.controller');

router.post('/products', productCtrl.createProduct);
router.get('/products',productCtrl.getProducts);
router.get('/products/:id', productCtrl.getProduct);
router.put('/products/:id', productCtrl.updateProduct);
router.delete('/products/:id', productCtrl.deleteProduct);



module.exports = router;