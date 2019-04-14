var express = require("express");
var $ = require("jquery");
// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3002;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); //this is our middleware

app.use(express.static(__dirname + "/app"));
console.log(__dirname + "/app");

require("./app/data/Routing/apiRoutes")(app);
require("./app/data/Routing/htmlRoutes")(app);

app.listen(PORT, function() {
  console.log(`App listening on http://localhost:${PORT}/home`);
});
