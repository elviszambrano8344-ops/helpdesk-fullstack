const express = require("express");
const cors = require("cors");
const ticketRoutes = require("./routes/ticketRoutes");

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use("/api/tickets", ticketRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
    res.json({
        mensaje: "API Help Desk funcionando correctamente"
    });
});

module.exports = app;