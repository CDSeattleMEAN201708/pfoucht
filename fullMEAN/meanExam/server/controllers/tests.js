var mongoose = require('mongoose');
var Test = mongoose.model('Test');
module.exports = {
  addQ: function(req, res) {
    console.log("Inside addQ test model");
    let new_Q = new Test(req.body)
    new_Q.save()
      .then((data) => {
        console.log("***** After saving Q" + data);
        res.json({data})
      })
      .catch(err => {
        console.log("***** Error after saving Q" + err);
        res.json({err})
      })
  },

  getQs: function(req, res) {
    Test.find({})
      .then(tests => {
        res.json(tests)
      })
      .catch(err => {
        console.log(err);
        res.json(err)
      })
  }

}
