// import orm.js into adventure.js 
const orm = require('../config/orm.js');

//call ORM functions
const adventure = {
    selectAll: function (callback) {
        orm.selectAll(function (res) {
            callback(res);
        });
    },

    insertOne: function (adventure_name, callback) {
        orm.insertOne(adventure_name, function (res) {
            callback(res);
        });
    },

    updateOne: function (adventure_id, callback) {
        orm.updateOne(adventure_id, function (res) {
            callback(res);
        });
    }
};
module.exports = adventure;