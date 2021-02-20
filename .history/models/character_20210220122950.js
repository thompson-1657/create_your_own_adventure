const bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
    const Character = sequelize.define("Character", {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
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
    }
    });

    User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
    };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
    Character.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null
    );
    });
    return User;
};