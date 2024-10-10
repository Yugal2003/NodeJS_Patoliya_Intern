// const express = require('express');
// const app = express();

// const port = 2222;




// {basic routing start

// app.get('/',(req,res)=>{
//     res.send('Welcome to Home Page !')
//     console.log('Basic Home Routing !');
// })

// app.get('/about',(req,res)=>{
//     res.send('Welcome to About Page !')
//     console.log('Basic About Routing !');
// })

// basic routing end}











// {dynamic routing start

// app.get('/api/v1/:name/:id',(req,res)=>{
//     const {name,id} = req.params;
    
//     res.status(200).end(
//         `Welcome ${name} Your Id is ${id}`)
//         console.log('Dynamic Routing Success !');
// })

// dynamic routing end}









// {
// req.query routing start

// app.get('/api/v1',(req,res)=>{
//     const {name,age} = req.query;
    
//     res.status(200).end(
//         `Welcome ${name} Your Age is ${age}`)
//         console.log('Dynamic Routing Success !');
// })


// req.query routing end}








// {req.param routing start

// app.get('/api/v1/:name/:age',(req,res)=>{
//     const {name,age} = req.params;

//     res.status(200).json({
//         success : true,
//         message : `Welcome ${name} Your Age is ${age}`
//     })
//     console.log('Dynamic Routing Success !');
// })

// req.param routing end}

// app.listen(port,()=>{
//     console.log(`Server Running At Port : ${port}`);
// });







// Create a separate file for your routes


// const express = require('express');
// const app = express();
// const separateFile  = require('./separateFile');

// const port = 2222;

// app.use('/user', separateFile);

// app.listen(port,()=>{
//     console.log(`Server Running On Port : ${port}`);
// })