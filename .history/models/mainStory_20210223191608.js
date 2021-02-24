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
            get() => {
                const input = this.getDataValue("hehexd")
            }
            
        }
    })
    return MainStory;
};
// stringify object
//parse array or store as another representation