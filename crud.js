// const path = require('path');
// const fs = require('fs');

// const dirPath = path.join(__dirname,'crud');
// const filePath = `${dirPath}/apple.txt`;


// MAKE A FILE

// fs.writeFile(filePath,'This is an Fruit Page !','utf-8',(err)=>{
//     if(err){
//         console.log(Error);
//     }
//     console.log('Data: File Create Successfully !');
// });

// READ FILE


// fs.readFile(filePath,'utf8',(err,data)=>{
//     if(err){
//         console.log('Error Ocurred !');
//     }
//     console.log("Data :",data);
// })


// UPDATE FILE

// fs.appendFile(filePath,'\nThis is an Banana page !',(err)=>{
//     if(err){
//         console.log("Error Occured !");
//     }
    // console.log("File Data Add Successfully !");
// })


// RENAME FILE

// fs.rename(filePath,`${dirPath}/fruit.txt`,(err) =>{
//     if(err){
//         console.log("Error Occured !");
//     }
//     console.log("File Name Update Successfully !");
// })


// DELETE FILE


// fs.unlink(`${dirPath}/apple.txt`,(err) =>{
//     if(err){
//         console.log("Error Occured !");
//     }
//     console.log("File Delete Successfully !");
// })