const {Client} = require('pg');
const tab = require('./model/db').table

var connectionString;

// Function to Initialize Connection String
const initialize = function (user, password, db){
	connectionString = 'postgresql://postgres:Runner4life!@localhost:5432/testusers';
	return connectionString;
};

const getAll = function(cb){
  console.log(tab);
  const client = new Client({
  	connectionString: connectionString,

  })

  client.connect()
  .then(() => {
  	return client.query (`SELECT * FROM test_user`)
  
  })
  
    .then((result) => {
    console.log(result);
    return cb(result);
  })
};

const findById = function(id, cb) {
  const client = new Client({
    connectionString: connectionString,

  })

  client.connect()
  .then(() => {
    return client.query(`SELECT * FROM students WHERE id=$1`, [req.params.id]);
  
  })
  
    .then((result) => {
    console.log(result);
    return cb(result);
 })
};

module.exports = {initialize, getAll, findById};