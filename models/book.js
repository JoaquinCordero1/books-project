const mongoose = require("mongoose");
process.loadEnvFile();

const DATABASE_NAME = process.env.DATABASE_NAME;

const bookSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    publishedYear: { type: Number, required: true },
  },
  {
    collection: DATABASE_NAME,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
