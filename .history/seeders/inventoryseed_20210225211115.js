let sequelize = require("sequelize");
let db = require("../models/");

db.sequelize.sync().then(() => {
    let items = [
        {
            name: "Brendan Eich's Keyboard",
            description: "From the creator of JavaScript, the keyboard grants the power of unlimited JS"        
        },
        {
            name: "Ada Lovelace's Keyboard",
            description: "From the mother of all that we know is coding, this keyboard gives +999 to every stat"        
        },
        {
            name: "Tim Berners-Lee's Keyboard",
            description: "From the father of HTML, this keyboard grants you all basic stats +10"        
        },
        {
            name: "Håkon Wium's Keyboard",
            description: "From the creator of CSS Himself, This powerful keyboard will allow you to give all your webpages all a good look"        
        },
    ];
    console.log(db.Inventory)
    //db
    db.Inventory.bulkCreate(items)
        .then(data => {
            console.log(data);
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
})