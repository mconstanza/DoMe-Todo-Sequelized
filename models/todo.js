'use strict';

module.exports = function(sequelize, DataTypes) {
  var Todo = sequelize.define('Todo', {
    item: DataTypes.TEXT,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {

      }
    }
  });
  return Todo;
};
