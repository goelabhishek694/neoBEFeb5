const ProductModel =  require("../models/products");

const createProduct = async (req, res) => {
  const body = req.body;
  const product = await ProductModel.create({
    product_name: body.product_name,
    product_price: body.product_price,
    isInStock: body.isInStock,
    category: body.category,
  });
  res.status(200).json({
    message: "Product added",
    product,
  });
};

const getAllProducts = async (req, res) => {
    const product = await ProductModel.find({})
    res.status(200).json({
       message:"Product found",
       product
   })
}

const getProductById = async (req, res) => {
    const {id} = req.params;
    const product = await ProductModel.findById(id);
    res.status(200).json({
       message:"Product found",
       product
   })
}

const updateProduct = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    const product = await ProductModel.findByIdAndUpdate(id, body, {"returnDocument":'after'})
    res.status(200).json({
       message:"Product updated",
       product
   })
}

const deleteProduct = async (req, res) => {
    const {id} = req.params;
    const product = await ProductModel.findByIdAndDelete(id)
    res.status(200).json({
       message:"Product deleted",
       product
   })
};

module.exports = {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProduct
}

