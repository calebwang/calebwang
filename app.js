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
    console.log('Serving /');
});

app.get('/about', function(req, res){
    res.render('about', {
                         title: 'Caleb'
                        })
    console.log('Serving /about');
});

app.get('/projects', function(req, res){
    res.render('projects', {title: 'Projects'});
    console.log('Serving /projects');
});

app.get('/contact', function(req, res){
    res.render('contact', {title: 'Contact'});
    console.log('Serving /contact');
});

app.get('/blog', function(req, res){
    res.render('blog', {title: 'Blog'});
    console.log('Serving /blog');
});

app.listen(process.env.PORT || 8000);
