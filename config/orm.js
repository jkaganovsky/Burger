const { query } = require("./connection.js");
const connection = require("./connection.js");

const orm = {
    selectAll: function(tableInput, cb) {
        const queryString = "SELECT * FROM " + tableInput + ";";
        connection.query(queryString, function(err, res) {
                if (err) {
                    throw err;
                }
                cb(res);
            });
    },
    insertOne: function(table, cols, vals, cb) {
        const queryString = "INSERT INTO " + table;

        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString +=
    }

}