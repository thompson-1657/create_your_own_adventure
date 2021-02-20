module.exports = function(sequelize, DataTypes) {
    const MainStory = sequelize.define("MainStory", {
        event: {
            type: DataTypes.STRING,
            allowNull: false
        },
        choice: {
            type: DataTypes.STRING
        }
    })
    return MainStory;
};