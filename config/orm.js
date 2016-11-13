// var connection = require('./connection.js');
var mysql = require('mysql');
var connection = mysql.createConnection(process.env.JAWSDB_URL);

// connection.connect();

var orm = {

  all: function(table, cb) {
    var query = 'select * from ' + table + ';';
    connection.query(query, function (err, result) {
      if (err) throw err;
      cb(result);
    });
  },

  // cols and vals are arrays to be used in the SQL query
  create: function(table, cols, vals, cb) {
    var query = 'insert into ' + table;

    query += ' (';
    query += cols.toString();
    query += ') ';
    query += 'values (';
    query += printQuestionMarks(vals.length);
    query += ') ';

    console.log(query);

    connection.query(query, vals, function (err, result){
      if (err) throw err;
      cb(result);
    });
  },

  // colObj = object holding key value pairs of columns: values to update in db
  // Example: {item: "Wash the dishes", completed: false}
  // condition is the filter to use for sql command
  update: function(table, colObj, condition, cb) {
    var query = 'update ' + table;

    query += ' set ';
    query += objToSql(colObj);
    query += ' where ';
    query += condition;

    console.log(query);
    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  delete: function (table, condition, cb) {
    var query = 'delete from ' + table;
    query += ' where ';
    query += condition;

    connection.query(query, function(err, result) {
      if (err) throw err;
      cb(result);
    });
  }
};

// Utility Functions ////////////////////////////////////////////////////////////

// inserts ? into sql statement so that vals array can be passed directly into
// query function
function printQuestionMarks(num) {
	var arr = [];

	for (var i = 0; i < num; i++) {
		arr.push('?');
	}

	return arr.toString();
}

function objToSql(ob) {
	// column1=value, column2=value2,...
	var arr = [];

	for (var key in ob) {
		if (ob.hasOwnProperty(key)) {
			arr.push(key + '=' + ob[key]);
		}
	}

	return arr.toString();
}


//  EXPORT ME //////////////////////////////////////////////////////////
module.exports = orm;
