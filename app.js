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

poet
    .createPostRoute('/blog/post/:post', 'post')
    .createPageRoute('/blog/page/:page', 'page')
    .createTagRoute('/blog/tag/:tag', 'tag')
    .createCategoryRoute('/blog/category/:category', 'category')
    .init();

app.get('/', function(req, res){
    res.render('about', {
                         title: 'Caleb'
                        });
    console.log('Serving /');
});

app.get('/about', function(req, res){
    res.render('about', {
                         title: 'Caleb'
                        });
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

function myCallback(data){
    return data;
}

function readContent(filename, callback) {
    fs.readFile(__dirname + '/public' + filename, function(err, data) {
        if (err) return callback(err)
        callback(data)
    })
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
                        listFiles: function(){
                                var myArr = Array()
                                myArr[0] = '/files/test.json';
                                return myArr
                            }
                        }
    );    

    console.log('Serving /test')
});
var port = process.env.PORT || 8000

app.listen(port, function() {
  console.log('Listening on port ' + port);
});
