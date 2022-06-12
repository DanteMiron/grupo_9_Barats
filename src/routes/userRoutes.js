const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddlewares');
const path = require('path')
const { body } = require('express-validator');

let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = path.join(__dirname + '../../../public/profileImg');
        cb(null, folder);
    },
    filename: function (req, file, cb) {
        const newFilename = 'perfil-' + Date.now() + path.extname(file.originalname);
        cb(null, newFilename);
    }
}); 

const upload = multer({ storage });

router.get('/register', userController.register);
router.get('/login', userController.login);
router.post('/register', userMiddleware.validateUser , upload.single('img'), userController.create);
router.get('/', userController.list);
router.get('/:id', userController.user);
router.get('/:id/edit', userController.editView);
router.put('/:id/edit', userController.edit);
router.delete('/:id', userController.delete)
module.exports = router; 
