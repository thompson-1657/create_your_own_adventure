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
        leftchoice: {
            type: DataTypes.TEXT,
        },
        leftChoiceId: {
            id: DataTypes.INTEGER
        },
        rightChoice: {
            type: DataTypes.TEXT,
        },
        rightChoiceId: {
            id: DataTypes.INTEGER
        }
    })
    return MainStory;
};
// stringify object
//parse array or store as another representation