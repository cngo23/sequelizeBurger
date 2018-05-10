module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burgers", {
        text:{type: DataTypes.STRING,
        validate:{
            len:[3,25]
        },
    },
    flag: DataTypes.BOOLEAN
    })

    return burger;
}
