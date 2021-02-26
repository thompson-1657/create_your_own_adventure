let sequelize = require("sequelize");
let db = require("../models/");

db.sequelize.sync({force: true}).then(() => {
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
console.log(db.MainStory)
//db
db.MainStory.bulkCreate(stories)
    .then(data => {
        console.log(data.result + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
})