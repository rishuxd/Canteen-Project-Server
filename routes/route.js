import express from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";
import {
  getProducts,
  getProductById,
} from "../controller/product-controller.js";
import { placeOrders } from "../controller/order-controller.js";

const Router = express.Router();

Router.post("/signup", userSignup);
Router.post("/login", userLogin);
Router.get("/products", getProducts);
Router.get("/product/:id", getProductById);
Router.post("/orders", placeOrders);

export default Router;
