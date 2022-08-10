const db = require("../../database/models");

const homeController = {
    index : (req, res) => {
        let productos = db.Producto.findAll({
                            order: [["price","ASC"]],
                            limit: 4
                        });
        let ahora12 = db.Producto.findAll({
            where: {
                fees: 12
            },
            limit: 4
        })                       
        Promise.all([productos,ahora12])
            .then(function([products, ahora12]){
       return res.render('home', {products:products , ahora12:ahora12});
    })
    }
}

module.exports = homeController;