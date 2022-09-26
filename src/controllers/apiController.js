const db = require("../../database/models");
const op = db.Sequelize.Op;

module.exports = {
    users: function (req,res) {
        db.Usuario
            .findAll({
                attributes:['id', 'name' ,'last_name','email']
            })
            .then(user =>{
                user.map((usuario,i)=>{
                    user[i].dataValues.detail = `http://localhost:3000/api/users/${user[i].id}`
                })
               return res.status(200).json({
                count: user.length,
                data: user
               })
            })       
    },
    user: function (req,res){
        db.Usuario
            .findByPk(req.params.id,{
                attributes:['id','name','last_name','email','tel','image']
            })
            .then(user =>{
                return res.status(200).json({
                    id: user.id,
                    name: user.name,
                    lastName: user.last_name,
                    email: user.email,
                    tel: user.tel,
                    url: `http://localhost:3000/profileImg/${user.image}`
                })
            })
    },
    products: function(req,res){
        let products = db.Producto.findAll({
            attributes: ['id','name', 'description','categoría_id','tipo_id','price','image']
        });
        let hombre = db.Producto.findAll({
            where: {
                categoría_id: 0
            }
        });
        let mujer = db.Producto.findAll({
            where: {
                categoría_id: 1
            }
        });
        let niño = db.Producto.findAll({
            where: {
                categoría_id: 2
            }
        });
        let accesorios = db.Producto.findAll({
            where: {
                categoría_id: 3
            }
        });
        let pedidoCategoria = db.Categoria.findAll();
        let pedidoTipo = db.Tipo.findAll();

        Promise.all([products,hombre,mujer,niño,accesorios,pedidoCategoria,pedidoTipo])
            .then(function ([products,hombre,mujer,niño,accesorio,categoria,tipo]){
                let priceTotal = 0;
                products.map((usuario,i)=>{
                    products[i].dataValues.array =[
                        { categoria: categoria[products[i].dataValues.categoría_id].name},
                        { tipo: tipo[products[i].dataValues.tipo_id].name}
                    ];
                    products[i].dataValues.detail = `http://localhost:3001/api/products/${products[i].id}`;
                    delete products[i].dataValues.categoría_id;
                    delete products[i].dataValues.tipo_id
                    priceTotal +=  products[i].dataValues.price
                    delete products[i].dataValues.price
                })
                return res.status(200).json({
                    count: products.length,
                    countByCategory: {
                        hombres: hombre.length,
                        mujer: mujer.length,
                        niño: niño.length,
                        accesorio: accesorio.length
                        },
                    products: products,
                    priceTotal: priceTotal
                })
            })

    },
    product: function (req,res){
        let product = db.Producto.findByPk(req.params.id);
        let pedidoCategoria = db.Categoria.findAll();
        let pedidoTipo = db.Tipo.findAll();

        Promise.all([product,pedidoCategoria,pedidoTipo])
            .then(function([product,categoria,tipo]){
                return res.status(200).json({
                    id: product.id,
                    name: product.name,
                    description: product.description,
                    price: product.price,
                    fees: product.fees,
                    array: [
                        {categoria: categoria[product.categoría_id].name},
                        {tipo: tipo[product.tipo_id].name}
                    ],
                    url: `http://localhost:3001/productImg/${product.image}`
                })
            })
    }

    
}