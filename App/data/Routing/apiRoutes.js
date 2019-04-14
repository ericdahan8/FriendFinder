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
    //math for friends
    var totalDifference = 100;
    var currDifference = 0;
    var bestMatch;

    for (var i = 0; i < friends.length; i++) {
      for (var j = 0; j < 10; j++) {
        //this body may be off
        currDifference += Math.abs(req.body.scores[j] - friends[i].scores[j]);
      }
      console.log(i + " " + currDifference);
      if (currDifference < totalDifference) {
        bestMatch = friends[i];
      }
      currDifference = 0;
    }

    //his will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.
    // res.json({ data: currReservations });
    //gets the data into the body
    friends.push(req.body);
    res.json(true);
  });
};
