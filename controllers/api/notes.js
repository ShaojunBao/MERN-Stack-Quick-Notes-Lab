const Note = require('../../models/notes');

module.exports = {
    createNote,
    index
};

async function createNote(req, res) {
    try {
        const note = await Note.create({
            text: req.body.text,
            user: req.user._id  
        })
        res.json(note);
    } catch (err) {
        res.status(400).json(err);
    }
}

async function index(req, res) {
    try {

      const userId = req.params.userId;
  

      const notes = await Note.find({ user: userId }).sort('-createdAt');
  

      if (!notes.length) {
        return res.status(200).json({ message: 'No Notes Yet!' });
      }
  

      res.status(200).json(notes);
    } catch (err) {
      res.status(500).json({ error: 'Error fetching notes' });
    }
  }