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
            getterMethods: {
                id: function() {
                    return this.getDataValue('2')
                }
            }
            
        }
    })
    return MainStory;
};
// stringify object
//parse array or store as another representation