import Express from "express";
import {
  getAllProducts,
  getByPrice,
} from "../controllers/ProductsController.js";

const productRouter = Express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/price", getByPrice);

export default productRouter;
