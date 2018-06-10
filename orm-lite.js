var app = require('./app');
var connectionString;

// Function to Initialize Connection String
const initialize = function (user, password, db){
	connectionString = 'postgresql://postgres:Runner4life!@localhost:5432/test_user';
	return connectionString;
};

const getAll = function(cb){
  const client = new Client({
  	connectionString: connectionString,

  })

  client.connect()
  .then(() => {
  	return client.query (`SELECT * FROM test_user`)
  
  })
  
    .then((result) => {
    return res.render('test_user', {result})
  })
};

const findById = function(cb, id) {
  const client = new Client({
    connectionString: connectionString,

  })

  client.connect()
  .then(() => {
    return client.query(`SELECT * FROM students WHERE id=$1`, [req.params.id]);
  
  })
  
    .then((result) => {
    return res.render('test_user', {result});
 })
};
