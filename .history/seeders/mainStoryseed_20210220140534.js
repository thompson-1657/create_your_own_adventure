let sequelize = require("sequelize");
let db = require("../models");
// mongoose.connect("mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });
//rows
let stories = [
    {
        title: "Fork in the road",
        text: "the adventurer comes upon a path on the road.",
        choice: "Dark Forest, Flower Garden"        
    },
];

//db
db.MainStory.bulkInsert(stories)
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });