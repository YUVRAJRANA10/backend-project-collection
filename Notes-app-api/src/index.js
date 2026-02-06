
const express = require('express');
const app = express();

const notesrouter = require('./routes/notes.routes')
app.use(express.json());


app.use('/notes', notesrouter);



app.listen(3000, ()=> {
console.log("Server is running at port 3000")

})





// index.js   --- setup of the srrver 
// routes/ --- url mapping
// controllers/ --- logic
// utils/ --- helpers (Fs , db , etc)



















