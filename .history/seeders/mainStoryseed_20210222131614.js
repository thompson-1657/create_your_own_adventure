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
        text: "The adventurer comes upon a path on the road.",
        choice: "Dark Forest, Flower Garden"        
    },
    {
        title: "Dark Forest",
        text: "You find the body of a past warrior. What do you do?",
        choice: "Loot Body, Move Forward"        
    },
    {
        title: "Flower Garden",
        text: "You find a glowing flower in the center of the garden. It's glow gives you a sensation of warmth and comfort. What do you do?",
        choice: "Take Flower, Continue through Flower Garden"        
    },
];
console.log(db.MainStory)
//db
db.MainStory.bulkCreate(stories)
    .then(data => {
        console.log(data);
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
})