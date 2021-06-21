const Product = require("../models/Products");
const { isValidObjectId } = require("mongoose");

// create a new product
exports.createProduct = async (req, res, next) => {
  const newProduct = new Product(req.body);
  try {
    const product = await newProduct.save();
    res.status(201).json({
      message: "Product Saved Successfully",
      product,
    });
  } catch (error) {
    console.log(error);
    next();
  }
};

// get all products
exports.getProducts = async (req, res, next) => {
  try {
    // consultar base de datos
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.log(err);
    next();
  }
};

// get a product
exports.getProduct = async (req, res, next) => {
  try {
    const validObject = isValidObjectId(req.params.id);
    if (!validObject) {
      return res.status(422).json({ message: "The id is not valid" });
    }
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (error) {
    console.log(error);
    next();
  }
};


// updated a product 
exports.updateProduct = async (req, res, next ) => {
    try {
        const productUpdated = await Product.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true}
        );
        res.status(200).json({
            message: "Successfully updated",
            productUpdated
        })
        
    } catch (error) {
        console.log(error);
        next();

    }
}

// delete a product
exports.deleteProduct = async (req, res, next) => {
    try {
       const deleteProduct = await Product.findByIdAndDelete(req.params.id);
       res.status(200).json({ message: "product deleted"})
        
    } catch (error) {
        console.log(error);
        next();
    }
}