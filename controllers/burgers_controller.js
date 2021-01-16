const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        let burgerObj = {
            burgers: data
        };
        res.render("index", burgerObj);
        console.log("Table log:", burgerObj);
    })
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(data) {
        res.json({id: data.insertId});
    });
});

router.put("/api/burgers/:id", function(req, res) {
    let condition = `id = ${req.params.id}`

    console.log("Condition: ", condition);

    burger.updateOne(
        {
         devoured: req.body.devoured
        },
         condition,
         function(data) {
            if (data.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
    });
});

module.exports = router;