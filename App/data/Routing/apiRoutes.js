var path = require("path");
// Sets up the Express App
// =============================================================

module.exports = function(app) {
  // Sets up the Express app to handle data parsing
  app.get("/api/friends", function(req, res) {
    //display JSON of all possible friends
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    //his will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    // res.json({ data: currReservations });
    //gets the data into the body
    friends.push(req.body);
    res.json(true);
  });
};
