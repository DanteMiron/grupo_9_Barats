module.exports = function (sequelize, dataTypes){
    let alias = "Producto";
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        name:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        description:{
            type: dataTypes.TEXT,
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        price:{
            type: dataTypes.INTEGER,
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(80),
            allowNull: false
        },
        fees:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        usuarios_id:{
            type: dataTypes.INTEGER, 
        },
        categoría_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        },
        tipo_id: {
            type: dataTypes.INTEGER,
            allowNull: false
        }
    }
    let config = {
        tableName: "productos",
        timestamps: false
    }
    let Producto = sequelize.define(alias, cols, config);
    Producto.associate = function(models){
        Producto.belongsTo(models.Usuario,{
            as: "usuario",
            foreignKey: "usuarios_id"
        });
        Producto.belongsTo(models.Categoria,{
            as: "categoria",
            foreignKey: "categoría_id"
        });
        Producto.belongsTo(models.Tipo,{
            as: "tipo",
            foreignKey: "tipo_id"
        })
    }
    return Producto;
}