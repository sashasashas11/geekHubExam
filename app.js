var mongoose = require('mongoose');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/test');

var express = require('express');
var app = express();

app.use(express.static(__dirname));
//app.use(express.bodyParser());

app.post('/goods', function(request, response){
    var Goods = require('./model/goods');
    goods = new Goods(request.body);
    goods.save(function() {
        response.send(goods);
    })
});

app.get('/goods', function(request, response){
    var Goods = require('./model/goods');
    Goods.find().exec(function(err, goods) {
        response.send({goods: goods});
    });
});

app.delete('/goods/:id', function(request, response) {
    var Goods = require('./model/goods');
    Goods.remove({_id: mongoose.Types.ObjectId(request.param('id'))}, function(err) {
        response.send({error:err});
    })
});

app.listen(3031);
console.log("Server started on port 3031");
