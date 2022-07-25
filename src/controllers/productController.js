const { validationResult } = require('express-validator');
const actions = require('../database/actions');
const path = '\\JSON\\products.json'; 
const db = require("../../database/models");

const productController = {
    index: function (req, res) {
        res.render('products/product')
    },
    registerProduct: function (req, res) {
        res.render('products/create');
    },
    create: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            db.Producto.create({
                name: req.body.nameProduct,
                description: req.body.descriptionProduct,
                image: req.file.filename,
                price: req.body.priceProduct,
                fees: req.body.cuotas,
                categoría_id: req.body.categoryProduct,
                tipo_id: req.body.typeProduct
            })
            res.redirect('/products');
        } else {
            res.render('products/create', { errors : errors.mapped()});
        }
    },
    list: function (req, res) {
       let pedidoPelicula = db.Producto.findAll();
       let pedidoCategoria = db.Categoria.findAll();
       let pedidoTipo = db.Tipo.findAll();

        Promise.all([pedidoPelicula,pedidoTipo,pedidoCategoria])
            .then(function([products,type,category]){
                res.render('products/list', { products: products, category: category, type : type })
            })
        
    },
    editView: function (req, res) {
        db.Producto.findByPk(req.params.id)
        .then(function(productId){
            res.render('products/edit', { productId : productId });
        })
    },
    edit: function (req, res) {
        let errors = validationResult(req);
        if (errors.isEmpty()){
            db.Producto.update({
                name: req.body.nameProduct,
                description: req.body.descriptionProduct,
                image: req.file.filename,
                price: req.body.priceProduct,
                fees: req.body.cuotas,
                categoría_id: req.body.password,
                tipo_id: req.body.typeProduct,
            }, {
                where: {
                    id: req.params.id
                }
            })
        res.redirect('/products'); 
        } else {
            res.render('products/edit',{ errors : errors.mapped(), old: req.body})
        }
    },
    delete: function (req, res) {
        db.Producto.destroy({
            where: {
                id : req.params.id
            }
           })
        res.redirect('/products');
    },
    hombres: function(req,res){
        let pedidoPelicula = db.Producto.findAll({
            where:{
                categoría_id: 0
            }
        });
        let pedidoCategoria = db.Categoria.findAll();
        let pedidoTipo = db.Tipo.findAll();

        Promise.all([pedidoPelicula,pedidoTipo,pedidoCategoria])
            .then(function([products,type,category]){
                res.render('products/hombres', { products: products, category: category, type : type })
            })
    },
     mujeres: function(req,res){
        let pedidoPelicula = db.Producto.findAll({
            where:{
                categoría_id: 1
            }
        });
        let pedidoCategoria = db.Categoria.findAll();
        let pedidoTipo = db.Tipo.findAll();

        Promise.all([pedidoPelicula,pedidoTipo,pedidoCategoria])
            .then(function([products,type,category]){
                res.render('products/mujeres', { products: products, category: category, type : type })
            })
    },
    ninos: function(req,res){
        let pedidoPelicula = db.Producto.findAll({
            where:{
                categoría_id: 2
            }
        });
        let pedidoCategoria = db.Categoria.findAll();
        let pedidoTipo = db.Tipo.findAll();

        Promise.all([pedidoPelicula,pedidoTipo,pedidoCategoria])
            .then(function([products,type,category]){
                res.render('products/ninos', { products: products, category: category, type : type })
            })
    },
    accesorios: function (req,res){
        let pedidoPelicula = db.Producto.findAll({
            where:{
                categoría_id: 3
            }
        });
        let pedidoCategoria = db.Categoria.findAll();
        let pedidoTipo = db.Tipo.findAll();

        Promise.all([pedidoPelicula,pedidoTipo,pedidoCategoria])
            .then(function([products,type,category]){
                res.render('products/accesorios', { products: products, category: category, type : type })
            })
    },
    product: function (req, res) {
        let pedidoPelicula = db.Producto.findByPk(req.params.id);
        let pedidoCategoria = db.Categoria.findAll();
        let pedidoTipo = db.Tipo.findAll();
 
         Promise.all([pedidoPelicula,pedidoTipo,pedidoCategoria])
             .then(function([productId,type,category]){
                 res.render('products/product', { productId: productId, category: category, type : type })
             })
        
    }

}

module.exports = productController;