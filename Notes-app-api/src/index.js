const express = require('express');
const app = express();


const notesrouter = require('./routes/notes.routes')
app.use(express.json());


app.use('/notes', notesrouter);

app.get('/',(req,res)=>{
    console.log("Notes API running");
})


app.listen(3000, ()=> {
console.log("Server is running at port 3000")

})





// index.js   --- setup of the srrver 
// routes/ --- url mapping
// controllers/ --- logic
// utils/ --- helpers (Fs , db , etc)










// const http = require('http')

// const server = http.createServer(req,res) => {

//     console.log("request object", req);
//     res.end
// }
