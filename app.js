var express = require('express');
var app = express();

app.use(express.bodyParser())
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'ejs')
app.set('views', __dirname + '/views') 
app.set('view options', {layout: true})

app.get('/', function(req, res) {
    res.render('about', {page: 'about'},
                        {layout: 'layout'})
});

app.get('/about', function(req, res) {
    res.render('about', {page: 'about'})
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

app.listen(process.env.PORT || 8080);
