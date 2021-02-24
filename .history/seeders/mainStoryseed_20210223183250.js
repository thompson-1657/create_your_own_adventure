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
        choiceOne: "Dark Forest",
        choiceTwo: "Flower Garden"        
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
    {
        title: "Loot Body",
        text: "You feel a hand grab you. The body of the warrior rises and you have two choices",
        choice: "Engage Soilder, Run Away"        
    },
    {
        title: "Move Forward",
        text: "You move past the body and clear the forest. You've come to a town mid-festival. A beautiful is gesturing you to dance with her.",
        choice: "Take The Dance, Go To An Inn"        
    },
    {
        title: "Take Flower",
        text: "You take the flower and a guardian is summoned to Flower Garden. A loud shreek comes from the guardian. As he gathers power for his attack, what do you do?",
        choice: "Engage Guardian, Run Away"        
    },
    {
        title: "Fork in the road",
        text: "The adventurer comes upon a path on the road.",
        choice: "Dark Forest, Flower Garden"        
    },
    {
        title: "Run Away",
        text: "You barely escape the guardian. You've come to a town mid-festival. A beautiful is gesturing you to dance with her.",
        choice: "Take The Dance, Go To An Inn"        
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