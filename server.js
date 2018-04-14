const express = require('express');
const hbs = require('hbs');

var app =express();

hbs.registerPartials(__dirname+'/partials');
app.set('view engine', 'hbs');
app.use(express.static(__dirname+'/public'));
hbs.registerHelper('getCurrentYear',()=>
{
  return new Date().getFullYear()
});


app.use((req,res,next)=>{
console.log("hello world"),
next()
});



app.get('/',(req,res)=>{

//res.send('<h1>Hello!</h1>');
res.send({

name:'harish kumar',
age:24,
university:'University of North texas'
});

});


app.get('/about',(req,res)=>
{

res.render('view.hbs',{

  pageTitle: 'About Page',

});

})

app.listen(3000);
