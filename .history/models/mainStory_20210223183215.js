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
        choiceOne: {
            //parse array or store as another representation
            type: DataTypes.STRING
        },
        choiceTwo: {
            //parse array or store as another representation
            type: DataTypes.STRING
        }
    })
    return MainStory;
};