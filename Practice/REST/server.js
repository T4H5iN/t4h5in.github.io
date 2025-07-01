const mongoose = require("mongoose");
const dotenv = require("dotenv");
const express = require("express");
const bookRoutes = require("./routes/book.route");
dotenv.config();
const app = express();
app.use(express.json());
app.use("/api/books", bookRoutes);
const PORT = process.env.PORT;
// Connect to MongoDB
mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
        console.log("Connected to MongoDB");
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch((err) => console.error("DB connection error:", err));
