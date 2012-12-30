var express = require('express');
var app = express();
var poet = require('poet')( app );
var fs = require('fs')

app.use(express.bodyParser());
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
    res.render('about', {
                         title: 'caleb'
                        });
    console.log('Serving /');
});

app.get('/about', function(req, res){
    res.render('about', {
                         title: 'caleb'
                        });
    console.log('Serving /about');
});

app.get('/projects', function(req, res){
    res.render('projects', {title: 'projects'});
    console.log('Serving /projects');
});

app.get('/contact', function(req, res){
    res.render('contact', {title: 'contact'});
    console.log('Serving /contact');
});

app.get('/blog', function(req, res){
    res.render('blog', {title: 'blog'});
    console.log('Serving /blog');
});

app.get('/blog/categories', function(req, res){
    res.render('categories', {title: 'blog - categories'});
    console.log('Serving /blog/categories');
});

app.get('/blog/tags', function(req, res){
    res.render('tags', {title: 'blog - tags'});
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
