var mongoose = require('mongoose');
var User = mongoose.model('User');
module.exports = {
  index: function(req, res) {
    User.find({})
      .then((data) => {
        console.log(data);
        res.json(data)
      })
      .catch(err => console.log(err))
  },

  login: function(req, res) {
    req.session.user_name = req.body.name
    User.findOne(req.body)
      .then((user) => {
          if (user) {
            req.session.user_id = user.id
            console.log("The ID is " + req.session.user_id);
            res.json(user)
          } else {
            let new_user = new User(req.body)
            new_user.save()
              .then((user)=> {
                req.session.user_id = user.id
                console.log("The ID is " + req.session.user_id);
                res.json(user)
              })
              .catch(err => {
                console.log(err);
                res.json(err)
              })
          }
      })
      .catch(err => console.log("****" + err + " ***** .catch in findOne ****"))
  },

  checkedLoggedIn: function(req, res) {
    console.log(req.session.user_id);
    if (req.session.user_id) {
      res.json({"id": req.session.user_id})
    } else {
      res.json({"id": false})
    }
  },

  logout: function(req, res) {
    console.log("inside logout");
    if (req.session.user_id) {
      req.session.destroy()
    }
    res.redirect('/')
  },

  getID: function(req, res) {
    res.json({"name": req.session.user_name})
  }
}
