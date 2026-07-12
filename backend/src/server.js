const dotenv = require("dotenv");
dotenv.config();

const connectDB = require("./config/database");
const app = require("./app");

const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
connectDB();

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});