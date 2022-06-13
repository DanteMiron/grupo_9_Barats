const actions = require('../database/actions');
const path = '\\JSON\\products.json' 


const productController = {
    index: function (req, res) {
        res.render('products/product')
    },
    registerProduct: function (req, res) {
        res.render('products/create');
    },
    create: function (req, res) {
        if (req.file) {
            const body = req.body;
            body.image = req.file.filename;
            actions.path = path;
            actions.create(body);
            res.redirect('/products');
        } else {
            res.render('products/create');
        }
    },
    list: function (req, res) {
        actions.path = path;
        let products = actions.list();
        res.render('products/list', { 'products': products })
    },
    product: function (req, res) {
        actions.path = path;
        let products = actions.list();
        let productId = products.filter(product => product.id == req.params.id);
        res.render('products/product', { 'productId': productId });
    },
    editView: function (req, res) {
        actions.path = path;
        let products = actions.list();
        let productId = products.filter(product => product.id == req.params.id);
        res.render('products/edit', { 'productId': productId });
    },
    edit: function (req, res) {
        const body = req.body;
        const producto = req.params.id;
        actions.path = path;
        actions.edit(producto, body);
        res.redirect('/products');
    },

}

module.exports = productController;