import express from "express";
import {
  userSignup,
  userLogin,
  getUserByEmail,
} from "../controller/user-controller.js";
import {
  getProducts,
  addProducts,
  delProducts,
  getProductById,
} from "../controller/product-controller.js";
import { placeOrders, getOrders } from "../controller/order-controller.js";
import { adminLogin } from "../controller/admin-controller.js";

const Router = express.Router();

Router.post("/signup", userSignup);
Router.post("/login", userLogin);
Router.get("/getUser/:email", getUserByEmail);

Router.post("/adminlogin", adminLogin);

Router.get("/getProducts", getProducts);
Router.post("/addProducts", addProducts);
Router.post("/delProducts", delProducts);
Router.get("/getProducts/:id", getProductById);

Router.post("/orders", placeOrders);
Router.get("/getOrders", getOrders);

export default Router;
