const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function (req,res) {
    res.redirect("/burgers")
});

router.get("/burgers", function (req, res) {
    burger.all(function (data) {
        var hbsObject = {burgers: data };
        res.render("index", hbsObject);
    });
})

router.post("/burgers/add", function (req, res) {
    burger.create(req.body.burger_name, function () {
        res.redirect("/burgers")
    });
})

router.post("/burgers/delete/:id", function (req, res) {
    burger.delete(req.params.id, function () {
        res.redirect("/burgers")
    })
})

module.exports = router;


