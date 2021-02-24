let sequelize = require("sequelize");
let db = require("../models/");

db.sequelize.sync({force: true}).then(() => {
    let inventory = [
        {
            name: "Brendan Eich' Keyboard",
            description: ""        
        },
        {
            name: "Ada Lovelace's Keyboard",
            description: ""        
        },
        {
            name: "Tim Berners-Lee Keyboard",
            description: ""        
        },
        {
            name: "Håkon Wium Keyboard",
            description: ""        
        },