var path = require("path");
// Sets up the Express App
// =============================================================

module.exports = function(app) {
  // Sets up the Express app to handle data parsing
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname + "../../Public/survey.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname + "../../Public/home.html"));
  });
};
