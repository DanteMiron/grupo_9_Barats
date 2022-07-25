const db = require("../../database/models");

const homeController = {
    index : (req, res) => {
        db.Producto.findAll({
            order: [["price","ASC"]],
            limit: 4
        })
            .then(function(products){
       return res.render('home', {products:products});
    })
    }
}

module.exports = homeController;