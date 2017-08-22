const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: String,
  bids: [{
          name: String,
          bid: Number
        }]
}, { timestamps: true })

mongoose.model("Product", ProductSchema)
