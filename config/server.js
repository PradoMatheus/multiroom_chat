// Importar o modulo do framework express
var express = require('express');

// Importar o modulo do Consign
var consign = require('consign');

// Importar o modulo Body-Parser
var bodyParser = require('body-parser');

//Importar modulo do express Validator
var expressValidator = require('express-validator');

// Iniciar o objeto do express
var app = express();

// Setar as variaveis 'View Engine' 'View' do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

// Configurar o middleware express.static
app.use(express.static('./app/public'));

// Configurar o middleware Body-Parse
app.use(bodyParser.urlencoded({extended: true}));

// Configurar o middleware do Express-Validator
app.use(expressValidator()); 

// Efetua o autoload das rotas, dos modelos e dos controles para objeto app
consign()
.include('app/routes')
.then('app/models')
.then('app/controllers')
.into(app)

// Exportar o objeto app
module.exports = app;