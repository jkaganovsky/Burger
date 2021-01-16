const exphbs = require("express-handlebars");
const express = require("express");
const routes = require("./controllers/burgers_controller");
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(routes);

app.engine("handlebars", exphbs({defaultLayout: "main"}));

app.set("view engine", "handlebars");

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});


