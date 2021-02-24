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
            //parse array or store as another representation
            type: DataTypes.STRING
        }
        //function choice(stories) {
            // var parsedJSON = JSON.parse(stories.choice)
            // for (var i = 0; i <parsedJSON.length; i++) {
            //     alert(parsedJSON[i].Id)
            // }
        // }
    })
    return MainStory;
};