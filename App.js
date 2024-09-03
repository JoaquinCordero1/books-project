const express = require("express");
const connectDB = require("./config/db.js");
const controllers = require("./controllers/index.js");

const app = express();
const port = process.env.PORT ?? 1234;

connectDB();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Bienvenido a la API de libros");
});

app.get("/books", controllers.getBooks);
app.post("/books/create", controllers.addBooks);
app.put("/books/edit/:id", controllers.putBooks);
app.delete("/books/:id", controllers.deleteBooks);

app.use((req, res) => {
  res.status(404).send("Error 404. Página no encontrada");
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
