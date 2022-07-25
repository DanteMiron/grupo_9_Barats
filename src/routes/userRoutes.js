const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddlewares');
const path = require('path')
const guestMiddlewares = require('../middlewares/guestMiddlewares')

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

router.get('/register', guestMiddlewares, userController.register);
router.get('/login', guestMiddlewares, userController.login);
router.post('/login', userController.loginConfirmed);
router.post('/register',upload.single('img'), userMiddleware.validateUser, userController.create);
router.get('/', userController.list);
router.get('/:id', userController.user);
router.get('/:id/edit', userController.editView);
router.put('/:id/edit',  upload.single('img'), userMiddleware.validateUser, userController.edit);
router.delete('/:id', userController.delete)
module.exports = router; 
