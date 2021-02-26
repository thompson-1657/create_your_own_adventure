let sequelize = require("sequelize");
let db = require("../models/");

db.sequelize.sync({force: true}).then(() => {
    let inventory = [
        {
            name: "",
            description: ""        
        },