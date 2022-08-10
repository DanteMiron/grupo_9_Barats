const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controllers/userController');
const userMiddleware = require('../middlewares/userMiddlewares');
const editUserMiddleware = require('../middlewares/editUserMiddlewares');
const path = require('path');
const authMiddlewares = require('../middlewares/authMiddlewares');

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

router.get('/register', authMiddlewares, userController.register);
router.get('/login', authMiddlewares, userController.login);
router.post('/login', userController.loginConfirmed);
router.post('/register',upload.single('img'), userMiddleware.validateUser, userController.create);
router.get('/', authMiddlewares, userController.list);
router.get('/logout', userController.logout);
router.get('/:id', userController.user);
router.put('/:id/admin', userController.admin)
router.get('/:id/edit', userController.editView);
router.put('/:id/edit',  upload.single('img'), editUserMiddleware.validateUser, userController.edit);
router.delete('/:id', userController.delete);
module.exports = router; 
 