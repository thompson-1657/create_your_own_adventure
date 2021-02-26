let sequelize = require("sequelize");
let db = require("../models/");

db.sequelize.sync({force: true}).then(() => {
    let adventurer = [
        {
            name: "MOON",
            hp: 100,
            mp: 100,
            exp: 0,
            HTML: 20,
            CSS: 20,
            JavaScript: 20,
            level: 1  
        }
    ];
    console.log(db.Character)
    //db
    db.Character.bulkCreate(adventurer)
        .then(data => {
            console.log(data);
            process.exit(0);
        })
        .catch(err => {
            console.error(err);
            process.exit(1);
        });
})