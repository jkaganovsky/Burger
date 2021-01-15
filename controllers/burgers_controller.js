const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/", (req, res) => {
    burger.selectAll(data => {
        let burgerObj = {
            burger_name: data
        };
        console.log("Table log:", burgerObj);
        res.render("index", burgerObj);
    })
});

router.post("/api/burgers", (req, res) => {
    burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], data => {
        res.json({id: data.insertId});
    });
});

router.put("/api/burgers/:id", (req, res) => {
console.log("Request, Response:", req, res);
    let condition = `id = ${req.params.id}`

    console.log("Condition: ", condition);

    burger.updateOne(
        {
         devoured: req.body.devoured
        },
         condition,
         data => {
            if (data.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();
    });
});

module.exports = router;