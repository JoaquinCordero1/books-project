const Book = require("../models/book.js");

const addBook = async (req, res) => {
  const { title, author, publishedYear } = req.body;
  try {
    if (!title || !author || !publishedYear) {
      console.log(title, author, publishedYear);
      return res.status(400).json({ message: "Faltan campos requeridos" });
    }

    const newBook = new Book({ title, author, publishedYear });

    const saveBook = await newBook.save();
    console.log("Libro añadido con éxito");
    res.json({ message: "Libro añadido con éxito", book: saveBook });
  } catch (err) {
    console.log("Error en la carga ", err.message);
    res.status(500).json({ message: "Error al cargar nuevo libro" });
  }
};

module.exports = addBook;
