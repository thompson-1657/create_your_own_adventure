let sequelize = require("sequelize");
let db = require("../models/");

db.sequelize.sync({force: true}).then(() => {
    let character = [
        {
            name: "Brendan Eich's Keyboard",
            hp: "",
            mp: "",
            exp: "",
            HTML: "",
            CSS: "",
            JavaScript: ""       
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