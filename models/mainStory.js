module.exports = function(sequelize, DataTypes) {
    const MainStory = sequelize.define("MainStory", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
<<<<<<< Updated upstream
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
        }
    })
    return MainStory;
};
// stringify object
//parse array or store as another representation
=======
        text: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        choice: {
            //parse array or store as another representation
            type: DataTypes.STRING
        }
    })
    return MainStory;
};
>>>>>>> Stashed changes
