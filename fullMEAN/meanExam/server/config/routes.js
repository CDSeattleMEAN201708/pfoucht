var path = require('path')
var users = require('./../controllers/users.js');
var tests = require('./../controllers/tests.js');

module.exports = function(app) {
  app.get('/index', users.index);
  app.post('/loginuser', users.login)
  app.get('/checkLoggedIn', users.checkedLoggedIn)
  app.get('/logout', users.logout)
  app.post('/addQ', tests.addQ)
  app.get('/getQs', tests.getQs)
  app.get('/getScores', users.scores)
  app.post('/updateScore', users.updateScore)
  // send any other requests to angular for routing
  app.get("*", (req, res) => {
		res.sendFile(path.resolve("./examAng/dist/index.html"))
	})
}
