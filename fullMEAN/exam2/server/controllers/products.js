var mongoose = require('mongoose');
var Product = mongoose.model('Product');
module.exports = {
  getBids: function(req, res) {
    Product.find({})
      .then((data) => {
        res.json(data)
      })
      .catch(err => console.log(err))
  },

  addProduct1: function(req, res) {
    let new_product = new Product()
    new_product.name = "Product 1"
    new_product.bids = []
    new_product.save(function(err){
      if (err) {
        console.log(err);
      } else {
        console.log(new_product);
      }
    })
  },

  addProduct2: function(req, res) {
    let new_product = new Product()
    new_product.name = "Product 2"
    new_product.bids = []
    new_product.save(function(err){
      if (err) {
        console.log(err);
      } else {
        console.log(new_product);
      }
    })
  },

  addProduct3: function(req, res) {
    let new_product = new Product()
    new_product.name = "Product 3"
    new_product.bids = []
    new_product.save(function(err){
      if (err) {
        console.log(err);
      } else {
        console.log(new_product);
      }
    })
  },

  addBet: function(req, res) {
    console.log(req.body);
    console.log("****");
    Product.findOne({"name": req.body.name})
      .then(data => {
        console.log(data);
        data.bids.push({"name" : req.session.user_name, "bid": req.body.bid})
        data.save()
        console.log(data);
      })
      .catch(err => {
        console.log(err);
      })
    res.json(true)
  },

  restart: function(req, res) {
    Product.find({})
      .then(products => {
        for (let product of products) {
          product.bids = []
          product.save()
            .then(data => res.json(true))
            .catch(err => console.log(err))
        }
      })
      .catch(err => {
        console.log(err);
      })
  },

}
