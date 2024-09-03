const Book = require("../models/book.js");

const deleteBooks = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteBook = await Book.findByIdAndDelete(id);

    console.log(`eliminado con éxito`);
    res.status(201).json({ mesagge: `eliminado con éxito` }).end();
  } catch (error) {
    console.log("Error al borrar", error);
    res.status(404).json({ message: "Hubo un error al borrar el libro." });
  }
};

module.exports = deleteBooks;
