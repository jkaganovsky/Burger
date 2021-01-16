const connection = require("./connection");

function printQuestionMarks(num) {
    let arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


function objToSql(ob) {
    let arr = [];

    for (let key in ob) {
      let value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }

    return arr.toString();
}

let orm = {
    selectAll: function(tableInput, cb) {
        let queryString = `SELECT * FROM ${tableInput};`

        connection.query(queryString, function(err, data) {
                if (err) {
                    throw err;
                }
                cb(data);
            });
    },

    insertOne: function(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals.length)})`

        console.log(queryString);

        connection.query(queryString, vals, function(err, data) {
            if (err) {
                throw err;
            }

            cb(data);
        });
    },

    updateOne: function(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`

        console.log(queryString);

        connection.query(queryString, function(err, data) {
            if (err) {
                throw err;
            }

            cb(data);
        });
    }
};

module.exports = orm;