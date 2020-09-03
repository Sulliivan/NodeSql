const express = require ('express');
const path = require ("path");
const mysql = require ("mysql");
const methodOverride = require ('method-override')
require('dotenv').config()


// Express
const app = express()
//method over
app.use(methodOverride('_method'))

// Ejs
app.set ('view engine', 'ejs');


// Middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Static
app.use(express.static(path.join(__dirname, 'public')));

// Mysql
const db = mysql.createConnection ({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE
});

db.connect((err) => {
    if (err) { throw err;}
    console.log('Connecté à la base MySQL');
});

global.db = db;

//controllers
const { getHomePage } = require ("./controllers/index");
const { addPlayer } = require('./controllers/players');
const { getSinglePlayer, getUpdateSinglePlayer, updateSinglePlayer, deleteSinglePlayer } = require('./controllers/player');


// afficher un seul joueur
app.get("/", getHomePage)
app.get ("/player/:id", getSinglePlayer)
app.post("/register/create", addPlayer)
app.get ("/player/edit/:id", getUpdateSinglePlayer)
app.put ("/player/edit/:id", updateSinglePlayer)
app.delete("/player/delete/:id", deleteSinglePlayer)


app.listen(3000, function() {
    console.log('le serveur ecoute le port 3000');
})

