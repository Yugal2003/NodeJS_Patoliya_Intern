const express = require('express');
const app = express();
const port = 3333;

app.set('view engine','ejs');

app.use(express.static('public'));

app.get('/',(req,res)=>{
    let title = 'Welcome To Home Page !'

    res.render('index',{title});
    console.log("Home Page !");
})

app.get('/users',(req,res)=>{
    let title = 'Welcome To Home Page !'
    let users = [
        {
            name : 'Yugal',
            age : 21
        },
        {
            name : 'Bhavik',
            age : 23
        },
        {
            name : 'Vivek',
            age : 19
        },
        {
            name : 'Om',
            age : 21
        }
    ]

    res.render('users',{users,title});
})

app.listen(port,()=>{
    console.log(`Server Running on Port : ${port}`);
})
