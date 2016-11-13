var orm = require('../config/orm.js');

var todo = {
  all: function(cb) {
    orm.all('todo', function (res) {
      cb(res);
    });
  },
  create: function (cols, vals, cb) {
    orm.create('todo', cols, vals, function (res) {
      cb(res);
    });
  },
  update: function (objColVals, condition, cb) {
    orm.update('todo', objColVals, condition, function (res) {
      cb(res);
    });
  },
  delete: function (condition, cb) {
    orm.delete('todo', condition, function (res) {
      cb(res);
    });
  }
};


module.exports = todo;
