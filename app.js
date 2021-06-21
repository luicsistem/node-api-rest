const express = require("express");
const cors = require("cors");
const logger = require("morgan");

const productRoutes = require("./routes/product.routes");

// -------Initializations --------
const app = express();

// ---- Settings ------------------
app.set("port", process.env.PORT || 4000);

// --- Enable  Cors ---
app.use(cors({
    origin: '*',
    methods: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Accept', 'Content-Type', 'Authorization'],
}));



// ------- middleware ------
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ---- Routes -----------
app.use("/", productRoutes);

module.exports = app;
