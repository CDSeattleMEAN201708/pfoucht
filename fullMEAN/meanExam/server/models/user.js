const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: String,
  score: Number
}, { timestamps: true })

mongoose.model("User", UserSchema)
