const connection = require("./connection");

function printQuestionMarks(num) {
    const arr = [];

    for (let i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


function objToSql(ob) {
    let arr = [];

    for (let key in ob) {
      const value = ob[key];
      if (Object.hasOwnProperty.call(ob, key)) {
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
      }
    }

    return arr.toString();
}

const orm = {
    selectAll: (tableInput, cb) => {
        const queryString = `SELECT * FROM ${tableInput};`
        connection.query(queryString, (err, data) => {
                if (err) {
                    throw err;
                }
                cb(data);
            });
    },

    insertOne: (table, cols, vals, cb) => {
        const queryString = `INSERT INTO ${table} (${cols.toString()}) VALUES (${printQuestionMarks(vals)})`

        console.log(queryString);

        connection.query(queryString, vals, (err, data) => {
            if (err) {
                throw err;
            }

            cb(data);
        });
    },

    updateOne: (table, objColVals, condition, cb) => {
        const queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition};`

        console.log(queryString);

        connection.query(queryString, (err, data) => {
            if (err) {
                throw err;
            }

            cb(data);
        });
    }
};

module.exports = orm;