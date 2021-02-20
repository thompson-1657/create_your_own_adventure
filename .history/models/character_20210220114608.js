const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

module.exports = function(sequelize, DataTypes) {
    const Character = sequelize.define("User", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        hp: {
            type: DataTypes.INTEGER,
            defaultValue: 100
        },
        mp: {
            type: DataTypes.INTERGER,
            defaultValue: 100
        },
        exp: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        HTML: {
            type: DataTypes.INTEGER,
            defaultValue: 10
        },
        CSS: {
            type: DataTypes.INTEGER,
            defaultValue: 10
        },
        JavaScript: {
            type: DataTypes.INTEGER,
            defaultValue: 10
        },
    })
    return Character
}