const Book = require("../models/book.js");

const getBooks = async (req, res) => {
  const books = await Book.find();

  if (books) {
    res.json({ books });
  } else {
    res.status(404).json({ message: "No hay libros" });
  }
};

module.exports = getBooks;
