const { body } = require('express-validator');
const actions = require('../database/actions');

let userMiddlewares = {
 validateUser : [
    body('name').notEmpty().withMessage('Debes completar este campo'),
    body('email').notEmpty().withMessage('Debes completar este campo').bail().isEmail().withMessage('Debes colocar un email valido').custom((value, {req})=>{
        if((actions.list()).find(user => user.email == req.body.email)){
            throw new Error ('Email ya registrado')
        }
        return true
    }),
    body('tel').notEmpty().withMessage('Debes completar este campo').bail().isInt().withMessage('Debes ingresar un numero').bail().isLength({ min: 8 }).withMessage('El numero de telefono debe contener al menos 8 caracteres'),
    body('password').notEmpty().withMessage('Debes completar este campo').bail().isLength({ min : 8}).withMessage('La contraseña al menos debe tener 8 caracteres'), 
    body('img').custom((value, {req}) => {
        let file = req.file;
        if(!file){
            throw new Error('Debes subir una imagen');
        }
        return true;
    }),
    body('passwordConfirmed').custom((value, {req})=>{
        if(req.body.password != req.body.passwordConfirmed){
            throw new Error('Las contraseñas deben coincidir')
        } 
            return true;
    })
]
}

module.exports = userMiddlewares;

 