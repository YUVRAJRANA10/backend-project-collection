const express = require('express');
const router = express.Router();



router.get('/', (req,res)=>{
    res.send("ALL notes will be returend here");
    console.log("router get got triggered")


})

module.exports = router;