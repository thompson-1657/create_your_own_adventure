<<<<<<< HEAD
//main story table
=======
//model for the main story which uses choice ids to route the story
>>>>>>> 751c1473d07d8c7b5835260fd968d136b243784a
module.exports = function (sequelize, DataTypes) {
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