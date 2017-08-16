// var mongoose = require('mongoose');
// var Quote = mongoose.model('Quote');
module.exports = {
  index: function(req, res) {
    // Quote.find({}, function(err, quotes) {
    //   res.render('main', {quotes: quotes});
    // })
    res.json({"hello":"indexWorld"})
  },

  addNote: function(req, res) {
    console.log(req.body);
    res.json(req.body)
  }
}
