module.exports = function (sequelize, dataTypes){
    let alias = "Usuario";
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
        last_name:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        email:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        tel:{
            type: dataTypes.STRING(45),
            allowNull: false
        },
        image:{
            type: dataTypes.STRING(80),
            allowNull: false
        },
        password:{
            type: dataTypes.STRING(80),
            allowNull: false
        },
        admin:{
            type: dataTypes.TINYINT(1),
            allowNull: false
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false
    }
    let Usuario = sequelize.define(alias, cols, config);
    return Usuario;
}