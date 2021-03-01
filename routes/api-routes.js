// Requiring our models and passport as we've configured it
const db = require("../models");
const passport = require("../config/passport");


module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), (req, res) => {
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  });
  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", (req, res) => {
    db.User.create({
        email: req.body.email,
        password: req.body.password
      })
      .then(() => {
        res.redirect(307, "/api/login");
      })
      .catch(err => {
        console.log(err)
        res.status(401).json("Email already in use.");
      });
  });
  // Route for logging user out
  app.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });
  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", (req, res) => {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });
  app.get("/api/story/:id", (req, res) => {
    // console.log(req.params.id)
    db.MainStory.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbMainStory) {
      res.json(dbMainStory)
    })
  })

  //sends the data from the main story seed to frontend
  app.get("/api/story", (req, res) => {
    db.MainStory.findAll({}).then(data => {
      res.json(data)
    })
  })

  app.post("/api/createCharacter", (req, res) => {
    db.Character.create({}).then((data) => {
        res.status(200).json(data)
      })
      .catch(err => {
        res.status(401).json(err);
      });
  });

  //sends character data to front end based on user id
  app.get("/api/character", (req, res) => {
    db.Character.findAll({
      include: [db.User],
      where: {
        id: req.user.id
      }
    }).then(data => {
      res.json(data)
    })
  });

  //updates the user's name in database when character is created
  app.put("/api/charname", (req, res) => {
    db.Character.update({
      name: req.body.name

    }, {
      where: {
        id: req.user.id
      }
    }, )
    db.Character.update({
      exp: 0
    }, {
      where: {
        id: req.user.id
      }
    }, )
  })

  //Increments the character exp on the table
  app.put("/api/charexp", (req, res) => {
    // console.log(req.body.exp)
    db.Character.increment({
      exp: (req.body.exp)
    }, {
      where: {
        id: req.user.id
      }
    }, )
  })

  //sends item data to character item on character table
  app.put("/api/charitem", (req, res) => {
    console.log(req.body.exp)
    db.Character.create({
      item: (req.body.item)
    }, {
      where: {
        id: req.user.id
      }
    }, )
  })
}