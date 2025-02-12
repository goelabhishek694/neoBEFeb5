const express = require("express");
const connectDB = require("./config/db");
const productRouter = require("./routes/products");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/products", productRouter);

app.get("/", (req, res) => {
    res.send("Welcome to the product API");
});

app.use((req, res) => {
    res.status(404).json({ message: "Route not found" });
});
   
   
const port = 3000;
app.listen(port , () => {
    console.log(`Server is listening on port ${port}`);
})