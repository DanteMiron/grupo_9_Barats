const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const productMiddlewares = require('../middlewares/productMiddlewares')
const multer = require('multer');
const path = require('path'); 

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
    let folder = path.join(__dirname + '../../../public/productImg');
    cb(null,folder);
    },
    filename: function (req, file, cb){
        const newFilename = 'producto-'+ Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
}
});

const upload = multer({ storage });
// Creación producto
router.get('/create', productController.registerProduct);
router.post('/create', upload.single('imageProduct'), productMiddlewares.validateProduct, productController.create);
// Lista de productos
router.get('/', productController.list);  
// Editar Producto
router.get('/:id/edit', productController.editView);
router.put('/:id/edit', upload.single('imageProduct'), productController.edit);
// Borrar Producto 
router.delete('/:id', productController.delete);
// Productos Hombres
router.get('/hombres', productController.hombres);
// Producto Particular
router.get('/:id', productController.product);



module.exports = router;