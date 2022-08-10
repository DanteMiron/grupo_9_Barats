const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
const productMiddlewares = require('../middlewares/productMiddlewares')
const multer = require('multer');
const path = require('path'); 
const guestMiddlewares = require('../middlewares/guestMiddlewares');
const authMiddlewares = require('../middlewares/authMiddlewares');

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

router.get('/ninos', productController.ninos);
router.get('/create', guestMiddlewares, authMiddlewares, productController.registerProduct);
router.post('/create', upload.single('imageProduct'), productMiddlewares.validateProduct, productController.create);
router.get('/', guestMiddlewares, authMiddlewares, productController.list);  
router.get('/hombres', productController.hombres);
router.get('/mujeres', productController.mujeres);
router.get('/accesorios', productController.accesorios);
router.get('/search',productController.search)
router.get('/:id/edit', guestMiddlewares,authMiddlewares, productController.editView);
router.put('/:id/edit', guestMiddlewares,authMiddlewares, upload.single('imageProduct'),productMiddlewares.validateProduct, productController.edit);
router.delete('/:id', productController.delete);
router.get('/:id', guestMiddlewares, productController.product);



module.exports = router;