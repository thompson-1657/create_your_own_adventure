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
            type: DataTypes.TEXT,
            get() {
                const input = "hehexd"
                return input
            }
        },
        rightChoice: {
            type: DataTypes.TEXT,
        },
        rightChoiceid: {
            id: DataTypes.INTEGER
        }
    })
    return MainStory;
};
// stringify object
//parse array or store as another representation