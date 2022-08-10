const { body } = require('express-validator');

const db = require("../../database/models");



const editUserMiddlewares = {
    validateUser :[
    body('name').notEmpty().withMessage('Debes completar este campo'),
    body('lastName').notEmpty().withMessage('Debes completar este campo'),
    body('tel').notEmpty().withMessage('Debes completar este campo').bail().isInt().withMessage('Debes ingresar un numero').bail().isLength({ min: 8 }).withMessage('El numero de telefono debe contener al menos 8 caracteres'),
    body('img').custom((value, {req}) => {
        let file = req.file;
        if(!file){
            throw new Error('Debes subir una imagen');
        }
        return true;
    }),
   

]}
module.exports = editUserMiddlewares;
