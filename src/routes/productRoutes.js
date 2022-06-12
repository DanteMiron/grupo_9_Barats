const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController')
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

router.get('/create', productController.registerProduct);
router.get('/', productController.list);
router.post('/create', upload.single('imageProduct'), productController.create);
// router.get('/:id', productController.product);
// router.get('/:id/edit', productController.editView);
// router.put('/:id/edit', productController.edit);
// router.delete('/:id', productController.delete)


module.exports = router;