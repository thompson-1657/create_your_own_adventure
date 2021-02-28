let sequelize = require("sequelize");
let db = require("../models/");

db.sequelize.sync({}).then(() => {
    let items = [
        {
            name: "Brendan Eich's Keyboard",
            description: "From the creator of JavaScript, the keyboard grants more JavaScript proficiency."        
        },
        {
            name: "Ada Lovelace's Keyboard",
            description: "From the mother of all that we know is coding, this keyboard grants ALL coding skills proficiency."        
        },
        {
            name: "Tim Berners-Lee's Keyboard",
            description: "From the father of HTML, this keyboard grants you all basic proficiencies."        
        },
        {
            name: "Håkon Wium's Keyboard",
            description: "From the creator of CSS Himself, This powerful keyboard grants +10 CSS"        
        },
        {
            name: "Josh's Melodica",
            description: "It's sweet melody clears your mind. It fills you with determination."
        },
        {
            name: "Bently's Ball",
            description: "What's this doing here? Thorw ball to summon Bently."
        }
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