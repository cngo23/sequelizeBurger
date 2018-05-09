const orm = require("../config/orm.js");

var burgers = {
    all: function (tableOutput) {
        orm.showAll("burgers", function (res) {
            tableOutput(res);
        })
    },

    create: function(newBurgerI, newBurgerO) {
        orm.newBurger(newBurgerI, function (data) {
            newBurgerO(data);
        })
    },

    delete: function(deleteBurgerI, deleteBurgerO) {
        orm.eatBurger(deleteBurgerI, function (data) {
            deleteBurgerO(data);
        })
    }
}

module.exports = burgers;
