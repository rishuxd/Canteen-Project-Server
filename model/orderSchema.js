import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({}, { strict: false });

const Orders = mongoose.model("orders", orderSchema);

export default Orders;
