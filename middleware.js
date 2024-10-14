// Application Level Middleware start

// const express = require('express');
// const app = express();
// const port = 4444;

// app.use((req,res,next)=>{
//     console.log("Application Level Middleware !");
//     next()
// })

// app.get('/',(req,res)=>{
//     console.log("Home Page Middleware !");
//     res.send("Home Level Middleware !")
// })

// app.get('/about',(req,res)=>{
//     console.log("About Page Middleware !");
//     res.send("About Level Middleware !")
// })

// app.listen(port,()=>{
//     console.log(`Server Running On Port : ${port}`);
// })

// Application Level Middleware end











// Route Level Middleware start

// const express = require('express');
// const router = express.Router();

// router.use((req, res, next) => {
//     console.log('Router-Level Middleware 1');
//     next();
// });

// router.use((req, res, next) => {
//     console.log('Router-Level Middleware 2');
// });

// router.get('/users', (req, res) => {
//     res.send('User list');
//     console.log("User List");
// });

// router.get('/abc', (req, res) => {
//     res.send('ABC list');
//     console.log("ABC List");
// });

// const app = express();
// app.use('/api', router); 

// app.listen(4444, () => {
//     console.log('Server running on port : 4444');
// });


// Route Level Middleware end











// Error-Handling Middleware start

// const express = require('express');
// const app = express();

// const port = 4444;

// Application Level Middleware
// app.use((req,res,next)=>{
//     console.log('Application Level Middleware !');
//     next();
// })

// simple middleware
// app.get('/',(req,res)=>{
//     console.log("Home Page !");
//     res.send("Home Page !")
// })

// simple middleware
// app.get('/about',(req,res,next)=>{
//     const err = new Error("Error While About Page !");
//     err.status = 400;
//     next(err);
// })

// error middleware 1 
// if first error midd. is not work so go to the second err. midd.
// app.use((err,req,res,next) =>{
//     if(err.status === 500){
//         console.log('Error While About Page !');
//         res.status(500).send("Internal Server Error !");
//     }
//     else{
//         next(err);
//     }
// })

// error middleware 2
// app.use((err,req,res,next)=>{
//     console.log('Unknown Errorss  :',err.message);
//     res.status(500).send("Something Went Wrong !");
// })

// app.listen(port,()=>{
//     console.log(`Server Running On Port : ${port}`);
// })

// Error-Handling Middleware end










// Built-in Middleware start

// with express.json() start

// const express = require('express');
// const app = express();

// const port = 4444;

// app.use(express.json());

// app.get('/',(req,res)=>{
//     console.log("Built_in Middleware !");
//     const {name} = req.body;
//     res.send(`Your Name is ${name}!`);
//     console.log(`Your Name is ${name}!`);
// })

// app.listen(port,()=>{
//     console.log(`Server Running On Port : ${port}`);
// })

// with express.json() end


// with express.urlencoded() start

// const express = require('express');
// const app = express();

// const port = 4444;

// app.use(express.urlencoded({extended:true}));

// app.get('/',(req,res)=>{
//     console.log("Built_in Middleware !");
//     const {Name,Surname} = req.body;
//     res.send(`Your Name is ${Name} ${Surname}!`);
//     console.log(`Your Name is ${Name} ${Surname}!`);
// })

// app.listen(port,()=>{
//     console.log(`Server Running On Port : ${port}`);
// })

// with express.urlencoded() end

// Built-in Middleware end