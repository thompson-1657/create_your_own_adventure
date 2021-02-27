module.exports = function(sequelize, DataTypes) {
    const MainStory = sequelize.define("MainStory", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        narrative: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        leftChoice: {
            type: DataTypes.TEXT,
        },
        leftChoiceId: {
            type: DataTypes.INTEGER
        },
        rightChoice: {
            type: DataTypes.TEXT,
        },
        rightChoiceId: {
            type: DataTypes.INTEGER
        },
        exp: {
            type: DataTypes.INTEGER
        },
        item: {
            type: DataTypes.STRING,
        }

    })
    return MainStory;
};
// stringify object
//parse array or store as another representation
