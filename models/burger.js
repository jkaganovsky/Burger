const orm = require("../config/orm");

const burger = {
    selectAll: cb => {
        orm.selectAll("burgers", data => {
            cb(data);
        })
    },

    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, data => {
            cb(data);
        })
    },

    updateOne: (objColVals, condition, cb) => {
        orm.updateOne("burgers", objColVals, condition, data => {
            cb(data);
        })
    }
};

module.exports = burger;