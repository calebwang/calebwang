var express = require('express');
var app = express();
var poet = require('poet')( app );
var fs = require('fs')
var connect = require('connect')

app.use(express.bodyParser());
app.use(connect.compress());
app.use(express.static(__dirname + '/public'));
app.use(app.router);

app.set('view engine', 'jade');
app.set('views', __dirname + '/views');
app.locals.pretty=true;
app.locals.title='blog';

poet
    .createPostRoute('/blog/post/:post', 'post')
    .createPageRoute('/blog/page/:page', 'page')
    .createTagRoute('/blog/tag/:tag', 'tag')
    .createCategoryRoute('/blog/category/:category', 'category')
    .init();

app.get('/', function(req, res){
    res.render('index');
    log('index', req.ip);
});

app.get('/about', function(req, res){
    res.render('about');
    log('index', req.ip);
});

app.get('/projects', function(req, res){
    res.render('projects');
    log('index', req.ip);
});

app.get('/contact', function(req, res){
    res.render('contact');
    log('index', req.ip);
});

app.get('/blog', function(req, res){
    res.render('blog');
    log('index', req.ip);
});

app.get('/resume', function(req, res){
    res.render('about');
    log('index', req.ip);
});


app.get('/blog/categories', function(req, res){
    res.render('categories');
    console.log('Serving /blog/categories');
});

app.get('/blog/tags', function(req, res){
    res.render('tags');
    console.log('Serving /blog/tags');
});


function log(page, ip) {
    var currentdate = new Date(); 
    var logline = "Serving " + page + ": " 
                    + (currentdate.getMonth()+1) + "/"
                    + currentdate.getDate()  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds() + "; "
                    + ip;
    console.log(logline);
}

function myCallback(data){
    return data;
}

function readContent(path) {
    var output = Array() 
    fs.readDir(__dirname + '/public' + path, function(err, files) {
        if (err) return err
        for (var i = 0; i < files.length; i++) {
            fs.readFile(__dirname + '/public' + path + '/' + file, function(err, data) {
                if (err) return err 
                output[i] = data;
            });
        }
    });
    while (output.length < files.length) {
        var x = 0;
    }
    return output
}

app.get('/test', function(req, res){
    fs.readFile('./public/files/test.json', function(err, data){
        if (err) throw err;
        console.log(JSON.parse(data)); 
        return JSON.parse(data);
    });

    res.render('test', {
                        title: 'test',
                        getJSON: function(filename){
                            return JSON.parse(fs.readFileSync(__dirname + '/public' + filename))
                            },
                        listFiles: function(path){
                                var myArr = Array()
                                myArr[0] = '/files/test.json';
                                return fs.readdirSync(__dirname + path)
                            }
                        }
    );    

    console.log('Serving /test')
});
var port = process.env.PORT || 8000

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
