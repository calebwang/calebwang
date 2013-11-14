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
    var currentdate = new Date(); 
    var datetime = "Serving /index: " 
                    + (currentdate.getMonth()+1) + "/"
                    + currentdate.getDate()  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    console.log(datetime);
});

app.get('/about', function(req, res){
    console.log(req.headers['referer']);
    res.render('about');
    var currentdate = new Date(); 
    var datetime = "Serving /about: " + (currentdate.getMonth()+1) + "/"
                    + currentdate.getDate()  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    console.log(datetime);
});

app.get('/projects', function(req, res){
    res.render('projects');
    var datetime = "Serving /projects: " +  
                    + (currentdate.getMonth()+1) + "/"
                    + currentdate.getDate()  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    console.log(datetime);
});

app.get('/contact', function(req, res){
    res.render('contact');
    var currentdate = new Date(); 
    var datetime = "Serving /contact: "  
                    + (currentdate.getMonth()+1) + "/"
                    + currentdate.getDate()  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    console.log(datetime);
});

app.get('/blog', function(req, res){
    res.render('blog');
    var currentdate = new Date(); 
    var datetime = "Serving /blog: " +  
                    + (currentdate.getMonth()+1) + "/"
                    + currentdate.getDate()  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    console.log(datetime);
});

app.get('/resume', function(req, res){
    res.render('about');
    var currentdate = new Date(); 
    var datetime = "Serving /resume: "  
                    + (currentdate.getMonth()+1) + "/"
                    + currentdate.getDate()  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    console.log(datetime);
});


app.get('/blog/categories', function(req, res){
    res.render('categories');
    console.log('Serving /blog/categories');
});

app.get('/blog/tags', function(req, res){
    res.render('tags');
    console.log('Serving /blog/tags');
});


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
