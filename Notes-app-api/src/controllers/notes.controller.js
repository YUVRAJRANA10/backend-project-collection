const getAllNotes = (req, res) => {
  res.send('All notes from controller');
  console.log("GetALLNOTES is working")
};



const getabcNotes = (req, res) => {
  res.send('All abc notes from controller');
  console.log("GetabcNOTES is working")
};



module.exports = {
  getAllNotes,
  getabcNotes
};
