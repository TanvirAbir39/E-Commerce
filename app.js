var express=require('express');
var app=express();

app.use(express.static(__dirname+'/Project_1271832'));
app.get('/',function(req,res){
res.redirect('index.html')
})


var port=6060;
app.listen(port);
console.log('Server listeninig at: http://localhost:'+port);