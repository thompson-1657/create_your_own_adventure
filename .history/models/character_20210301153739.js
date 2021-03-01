module.exports = function (sequelize, DataTypes) {
    const Character = sequelize.define("Character", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "MOON"
        },
        hp: {
            type: DataTypes.INTEGER,
            defaultValue: 100
        },
        mp: {
            type: DataTypes.INTEGER,
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
        level: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        item: {
            type: DataTypes.TEXT
        }
    })

    //assiciates the character table to the user table
    Character.associate = function (models) {
        Character.hasOne(models.User, {
            onDelete: "cascade"
        })
    }

    return Character;
};