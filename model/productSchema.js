import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  name: String,
  stock: Boolean,
  price: Object,
  ingredients: String,
  category: String,
  url: String,
  quantity: Number,
  orders: Object,
});

// Creating collection in "database1"
const Product = mongoose.model("products", productSchema);

export default Product;
