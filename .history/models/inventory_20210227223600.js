module.exports = function(sequelize, DataTypes) {
    const Inventory = sequelize.define("Inventory", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    })

    Inventory.associate = function(models) {
        Inventory.belongsTo(models.Character)
    }
    return Inventory;
};