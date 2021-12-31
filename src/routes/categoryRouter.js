import Express from "express";
import {
  createCategories,
  getCategories,
} from "../controllers/categoryController.js";

const categoryRouter = Express.Router();

categoryRouter.post("/", createCategories);
categoryRouter.get("/", getCategories);

export default categoryRouter;
