const path = require('path')
const users = require('./../controllers/users.js');
const products = require('./../controllers/products.js')

module.exports = function(app) {
  app.get('/index', users.index);
  app.post('/loginuser', users.login)
  app.get('/checkLoggedIn', users.checkedLoggedIn)
  app.get('/logout', users.logout)
  app.get('/getBids', products.getBids)
  app.get('/addProduct1', products.addProduct1)
  app.get('/addProduct2', products.addProduct2)
  app.get('/addProduct3', products.addProduct3)
  app.post('/addBet', products.addBet)
  app.get('/getID', users.getID)
  app.get('/restart', products.restart)
  // send any other requests to angular for routing
  app.get("*", (req, res) => {
		res.sendFile(path.resolve("./public/dist/index.html"))
	})
}
