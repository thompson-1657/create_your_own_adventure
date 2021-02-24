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
            choices: {
                type: DataTypes.TEXT,
                id: DataTypes.INTEGER
            }
        }
    })
    return MainStory;
};
//parse array or store as another representation