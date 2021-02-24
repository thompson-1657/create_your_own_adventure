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
            get: function() {
                return JSON.parse(this.getDataValue('choice'));
            }, 
            set: function(val) {
                return this.setDataValue('choice', JSON.stringify(val));
            }
            
        }
    })
    return MainStory;
};
// stringify object
//parse array or store as another representation