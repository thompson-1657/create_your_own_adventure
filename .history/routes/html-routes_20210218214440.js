// Requiring path to so we can use relative routes to our HTML files
const path = require("path");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.sendFile(path.join(__dirname, "../public/members.html"));
    //change path for handlebars
    //can display character information through this route
    //query data from database
  });

  app.get("/createcharacter", (req, res) => {
    //create character character code
    //should only require char name for now
  })

  app.get("/story", (req, res) => {
    //getting story text
  })

  app.get("/spawnenemie", (req, res) => {
    //spawn enemie that goes along with story
  })

  app.get("/levelup", (req, res) => {
    //insert xp into character 
  })

  app.get("/attack", (req, res) => {
    //choices for attack spells and items
  })
};
