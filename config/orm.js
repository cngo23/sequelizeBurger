const connection =  require("../config/connection.js");

var orm = {
    showAll: function (tableInput, tableOutput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function (err, data) {
            if (err) throw err;
            tableOutput(data);
        })
    },

    newBurger: function (newBurgerI, newBurgerO) {
        var queryString = "INSERT INTO burgers (burger_name) VALUES (?)"
        connection.query(queryString, [newBurgerI], function(err, data){
            if (err) throw err;
            newBurgerO(data);
        })
    },

    eatBurger: function (deleteBurgerI, deleteBurgerO) {
        var queryString = "UPDATE burgers SET devoured = 1 WHERE id = ?"
        connection.query(queryString, [deleteBurgerI], function(err, data) {
            if (err) throw err;
            deleteBurgerO(data);
        })
    }
}

module.exports = orm;
