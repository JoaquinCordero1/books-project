const mongoose = require("mongoose");
require("dotenv").config();

const URI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    return console.log("Conectado a MongoDB");
  } catch (err) {
    return console.log("Error al conectar: ", err);
  }
};

module.exports = connectDB;
