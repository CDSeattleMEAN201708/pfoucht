var notes = require('../controllers/notes.js');
module.exports = function(app) {
  app.get('/home', notes.index);
  app.post('/addNote', notes.addNote
)
  app.all("*", (req,res,next) => {
       res.sendFile(path.resolve("./notesAng/dist/index.html"))
   });
}
