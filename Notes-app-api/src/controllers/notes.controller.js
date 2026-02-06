const getAllNotes = (req, res) => {
  res.send('All notes from controller');
  console.log("GetALLNOTES is working")
};

module.exports = {
  getAllNotes
};
