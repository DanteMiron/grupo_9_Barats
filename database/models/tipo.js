module.exports = function (sequelize, dataTypes){
    let alias = "Tipo";
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
        tableName: "tipo",
        timestamps: false
    }
    let Tipo = sequelize.define(alias, cols, config);
    Tipo.associate = function(models){
        Tipo.hasMany(models.Producto,{
            as: "productos",
            foreignKey: "tipo_id"
        })
    }
    return Tipo;
}