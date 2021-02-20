const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Character = sequelize.define("User", {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    hp: {
        type: DataTypes.INTEGER,
        defaultValue: 100
    },
})