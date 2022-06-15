const { body } = require('express-validator');
let productMiddlewares = {
 validateProduct : [
    body('nameProduct').notEmpty().withMessage('Debes completar el nombre del producto'),
    body('descriptionProduct').notEmpty().withMessage('Debes dejar una descripción del producto').bail().isLength({min: 5 , max : 300}),
    body('categoryProduct').notEmpty().withMessage('Debes elegir una categoría'),
    body('typeProduct').notEmpty().withMessage('Debes elegir un tipo de producto'), 
    body('imageProduct').custom((value, {req}) => {
        let file = req.file;
        if(!file){
            throw new Error('Debes subir una imagen');
        }
        return true;
    }),
    body('priceProduct').notEmpty().withMessage('Debes colocar un precio').bail().isInt().withMessage('Debes colocar solamente numeros'),
    body('cuotas').notEmpty().withMessage('Debes elegir la cantidad de cuotas')
]
}

module.exports = productMiddlewares;
