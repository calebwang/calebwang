var express = require('express');
var app = express.createServer();

app.use(express.bodyParser())
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', 'views') 

app.get('/', function(req, res) {
    res.render('home', {page: 'home'})
});

app.get('/home', function(req, res) {
    res.render('home', {page: 'home'})
});

app.get('/about', function(req, res) {
    res.render('about', {page: 'about'})
});

app.get('/projects', function(req, res) {
    res.render('projects', {page: 'projects'})
});

app.get('/contact', function(req, res) {
    res.render('contact', {page: 'contact'})
});

app.listen(process.env.PORT || 8000);
