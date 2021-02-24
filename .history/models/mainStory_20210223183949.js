module.exports = function(sequelize, DataTypes) {
    const MainStory = sequelize.define("MainStory", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        choice: {
            //parse array or store as another representation
            choices: {
                type: DataTypes.STRING,
                id: DataTypes.INTEGER
            }
        }
    })
    return MainStory;
};