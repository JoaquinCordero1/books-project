const Book = require("../models/book.js");

const putBooks = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(400).json({ error: "ID no proporcionado" });
  }
  try {
    const book = await Book.findByIdAndUpdate(id, req.body, { new: true });

    console.log(`${book.title} editado con éxito `);
    res.json({ message: `El nombre del libro fue actualizado: `, book });
  } catch (error) {
    console.log("Error", err.message);
    res.status(404).json({ message: "Error al editar el título.", error });
  }
};

module.exports = putBooks;
