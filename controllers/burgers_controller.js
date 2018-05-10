const express = require("express");
const router = express.Router();

var db = require("../models")

router.get("/", function (req,res) {
    res.redirect("/burgers")
});

router.get("/burgers", function (req, res) {
    db.burgers.findAll({}).then(function (data) {
        var hbsObject = {burgers: data };
        res.render("index", hbsObject);
    });
})

router.post("/burgers/add", function (req, res) {
    db.burgers.create({
        text: req.body.text,
        flag: req.body.flag
    }).then(function (data) {
        res.redirect("/burgers")
    });
});

router.post("/burgers/delete/:id", function (req, res) {
    db.burgers.update({
        flag: 1,
    }, {
        where: {
            id: req.params.id
        }
    }).then(function (data) {
        res.redirect("/burgers");
    })
})

module.exports = router;


