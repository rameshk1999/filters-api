import Express from "express";
import { getAllProducts } from "../controllers/ProductsController.js";

const productRouter = Express.Router();

productRouter.get("/", getAllProducts);

export default productRouter;
