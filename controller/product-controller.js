import Product from "../model/productSchema.js";

export const addProducts = async (request, response) => {
  try {
    const exist = await Product.findOne({ id: request.body.id });
    if (exist) {
      return response.status(401).json({ message: "Product already exists." });
    }
    const product = request.body;
    const newProduct = new Product(product);
    await newProduct.save();

    response.status(200).json({ message: product });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const delProducts = async (request, response) => {
  try {
    await Product.deleteOne({ id: request.body.id });
    response.status(200).json({ message: "Product deleted successfully." });
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};

export const getProducts = async (request, response) => {
  try {
    const products = await Product.find({});
    response.status(200).json(products);
  } catch (error) {
    response.status(500).json({ message: error.message });
  }
};
