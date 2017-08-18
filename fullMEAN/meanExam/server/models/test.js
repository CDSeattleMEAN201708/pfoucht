const mongoose = require("mongoose");

const TestSchema = new mongoose.Schema({
  question: String,
  answer: String,
  fake1: String,
  fake2: String
}, { timestamps: true })

mongoose.model("Test", TestSchema)
