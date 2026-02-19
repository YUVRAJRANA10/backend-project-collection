const fs = require('fs/promises');
const path = require('path');


const notesFilesPath = path.join(__dirname,'../../data/notes.json');


const getNoteById = async (req,res) => {

  try {

    const {id} = req.params;

    const filedata =await fs.readFile(notesFilesPath,'utf-8');
    const notes = JSON.parse(filedata);

    const note = notes.find(n => n.id == id);
    
        if (!note) {
      return res.status(404).json({
        message: 'Note not found'
      });
    }


    res.json(note);
   
  } catch (error) {
    
res.status(500).json({

    message: 'Failed to fetch note',
      error: error.message
});

  }


};

const getAllNotes = async (req,res) => {
 
     try{
     const filedata =await fs.readFile(notesFilesPath,'utf-8');
     const data = JSON.parse(filedata);

     res.json(data);

     }
     
     catch(error){

      res.status(500).json({
      message: 'Failed to read notes',
      error: error.message
  
      
      });

     }


};



const createNote = async (req,res) =>{
try{

const {title,content} = req.body;


    if (!title || !content) {
      return res.status(400).json({
        message: 'Title and content are required'
      });
    }

const filedata = await fs.readFile(notesFilesPath,'utf-8');
const notes = JSON.parse(filedata);

const newNote = {
  id: Date.now(),
  title,
  content,
  createdAt: new Date().toISOString()
};


notes.push(newNote);

await fs.writeFile(notesFilesPath, JSON.stringify(notes,null,2));

res.status(201).json(newNote);


}
catch(error){

res.status(500).json({
  message: 'Failed to create note',
  error: error.message
});

}

};



// const getabcNotes = (req, res) => {
//   res.send('All abc notes from controller');
//   console.log("GetabcNOTES is working")
// };



module.exports = {
  getAllNotes,
  createNote,
  getNoteById
};
