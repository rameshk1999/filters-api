import Express from "express";
import {
  getAllProducts,
  getByCategory,
  getByPrice,
} from "../controllers/ProductsController.js";

const productRouter = Express.Router();

productRouter.get("/", getAllProducts);
productRouter.get("/price", getByPrice);
productRouter.post("/category", getByCategory);

export default productRouter;
