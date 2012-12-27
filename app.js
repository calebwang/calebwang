var express = require('express');
var app = express();

app.use(express.bodyParser())
app.use(express.static(__dirname + '/public'))

app.set('view engine', 'jade')
app.set('views', __dirname + '/views') 
app.locals.pretty=true;

app.get('/', function(req, res){
    res.render('about', {
                         title: 'Caleb'
                        })
});

app.get('/about', function(req, res){
    res.render('about', {
                         title: 'Caleb'
                        })
});

app.get('/projects', function(req, res){
    res.render('projects', {page: 'projects'});
});

app.get('/contact', function(req, res){
    res.render('contact', {page: 'contact'});
});

app.listen(process.env.PORT || 8080);
