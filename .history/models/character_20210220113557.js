const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Character = sequelize.define("User", {
    characterName: {
        type: DataTypes.STRING,
        allowNull: false
    }
})