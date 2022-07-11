module.exports = function (sequelize, dataTypes){
    let alias = "Categoria";
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
    }
    let config = {
        tableName: "categoría",
        timestamps: false
    }
    let Categoria = sequelize.define(alias, cols, config);
    Categoria.associate = function(models){
        Categoria.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "categoría_id"
        })
    }
    return Categoria;
}