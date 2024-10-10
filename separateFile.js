const express = require('express');
const router = express.Router()

router.get('/v1/:id',(req,res) =>{
    const userId = req.params.id;
    
    res.status(200).end(
        `Welcome To Separate File Page ! \n
Your ID is ${userId}`);
    console.log("Success !");
})

module.exports = router;