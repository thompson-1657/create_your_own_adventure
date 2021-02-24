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
        choices: {
            //parse array or store as another representation
            choices: {
                type: DataTypes.STRING,
                id: DataTypes.INTEGER
            }
        }
    })
    return MainStory;
};