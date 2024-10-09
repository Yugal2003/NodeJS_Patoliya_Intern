// FIFTH FILE SYSTEM MODULE START

// const fs = require('fs');

// fs readfile :


// fs.readFile('./example2.txt','utf-8',(err,data) =>{
//     if(err){
//         console.log("Error While ReadFile !");
//     }
//     console.log('Data :', data);
// })

// fs.writeFile


// let content = "Hello World !";

// fs.writeFile('./exmaple.txt',content,'utf-8',(err) =>{
//     if(err){
//         console.log("Error While ReadFile !");
//     }
//     console.log('Message : Data Added SuccessFully!');
// })


// fs.appendFile

// let content = "\nHello World";

// fs.appendFile('./exmaple.txt',content,'utf-8',(err)=>{
//     if(err){
//         console.log("Error While ReadFile !");
//     }
//     console.log('Message : Data Added SuccessFully!');
    
// })


//DELETE A FILE START

// const fs = require('fs');

// fs.unlink('./example2.txt',(err)=>{
//     if(err){
//         throw new err;
//     }
//     console.log('File Deleted !');
    
// })

//DELETE A FILE END


//RENAME A FILE START

// const fs = require('fs');

// fs.rename('./example.txt','example2.txt',(err)=>{
//     if(err){
//         throw new err;
//     }
//     console.log('File Rename !');
    
// })

//RENAME A FILE END








// FIFTH FILE SYSTEM MODULE START



// HTTPS MODULE START

// const http = require('http');

// const PORT = 9999;


// const server = http.createServer((req,res) =>{
//     res.statusCode = 200;
//     res.end("Hello !");
// })

// server.listen(PORT, () =>{
//     console.log("Server Start At PORT : " ,PORT);
// }) 

// HTTPS MODULE END