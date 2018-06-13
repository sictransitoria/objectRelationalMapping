// Module Variables
const express = require('express');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000

// Initialize Function
let objectRelational = require('./orm-lite')
objectRelational.initialize('postgres', 'Runner4life!', 'testusers');

// Create a new Express Application
const app = express();

// View Engine Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static('public'));  
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
	objectRelational.getAll((result) => {
		return res.render('testusers', {rows: result.rows})
	})
});

app.get('/testusers/:id', (req,res) => {
	let id = req.params.id; 
	objectRelational.findById(id, (result) => {
		return res.render('testusers', {row: result.rows[0]})
	})
});

app.get('*', (req, res) => {
	return res.redirect('/')
});

// Loud and Clear
app.listen(PORT, () => {
	console.log('Listening on port:', PORT)
});

// TAK