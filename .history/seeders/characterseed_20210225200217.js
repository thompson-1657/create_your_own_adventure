let sequelize = require("sequelize");
let db = require("../models/");

db.sequelize.sync({force: true}).then(() => {
    let character = [
        {
            name: "MOON",
            hp: 100,
            mp: 100,
            exp: 0,
            HTML: 20,
            CSS: 20,
            JavaScript: 20       
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