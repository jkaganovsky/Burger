const express = require("express");
const router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        const burgerObj = {
            burgers: data
        };
        console.log(burgerObj);
        res.render("index", burgerObj);
    });
});

router.post("/api/burger", function(req, res) {
    burger.insertOne([
        "burger name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(res) {
        res.json({id: res.insertId});
    });
});

router.put("/api/burger/:id", function(req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(res) {
        if (res.changedRows === 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;