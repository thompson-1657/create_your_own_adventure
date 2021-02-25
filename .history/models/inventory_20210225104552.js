module.exports = function(sequelize, DataTypes) {
    const Inventory = sequelize.define("Inventory", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        narrative: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    })
    return Inventory;
};