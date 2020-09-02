const express = require ('express');
const path = require ("path");
const mysql = require ("mysql");
require('dotenv').config()


// controller philippe
/*
const {addPlayerPage, AddplayerPost} = require ("./controllers")
*/




// Express
const app = express()

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
const { getSinglePlayer} = require('./controllers');

//routes
app.get("/", getHomePage)
app.post("/register/create", addPlayer)

app.get("/register",(req, res) => {
    res.render("form")
})

// afficher un seul joueur
app.get ("/:id", getSinglePlayer)




// url philippe
/*
app.get ("/add", addPlayerPage)
app.post ("/add", addPlayerPost)
*/








app.listen(3000, function() {
    console.log('le serveur ecoute le port 3000');
})

