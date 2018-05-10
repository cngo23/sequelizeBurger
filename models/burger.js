module.exports = function(sequelize, DataTypes) {
    var burger = sequelize.define("burgers", {
        text:{type: DataTypes.STRING,
        validate:{
            notNull: false,
            len:[3,15]
        },
    },
    flag: DataTypes.BOOLEAN
    })

    return burger;
}
