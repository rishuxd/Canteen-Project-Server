import express from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";
import { placeOrders, getOrders } from "../controller/order-controller.js";
import { adminLogin } from "../controller/admin-controller.js";

const Router = express.Router();

Router.post("/signup", userSignup);
Router.post("/login", userLogin);
Router.post("/adminlogin", adminLogin);
Router.get("/products", getProducts);
Router.get("/product/:id", getProductById);
Router.post("/orders", placeOrders);
Router.get("/getOrders", getOrders);

export default Router;
