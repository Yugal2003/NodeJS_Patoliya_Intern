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

const express = require('express');
const router = express.Router();

router.use((req, res, next) => {
    console.log('Router-Level Middleware 1');
    next();
});

router.use((req, res, next) => {
    console.log('Router-Level Middleware 2');
});

router.get('/users', (req, res) => {
    res.send('User list');
    console.log("User List");
});

router.get('/abc', (req, res) => {
    res.send('ABC list');
    console.log("ABC List");
});

const app = express();
app.use('/api', router); 

app.listen(4444, () => {
    console.log('Server running on port : 4444');
});


// Route Level Middleware end