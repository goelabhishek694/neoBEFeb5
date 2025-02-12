const express = require("express");
const {createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct} = require("../controllers/products");
const productRouter = express.Router();

//create
productRouter.post("/",createProduct );

//read
productRouter.get("/", getAllProducts);

// get product by id 
productRouter.get("/:id",getProductById );

//update product
productRouter.put("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;