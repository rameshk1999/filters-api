import Express from "express";
import Cors from "cors";
import Dotenv from "dotenv";
import { DBConnect } from "./src/config/DBConnect.js";
import productRouter from "./src/routes/productRouter.js";

Dotenv.config();
const app = Express();
const port = process.env.PORT;
app.use(Express.json());
app.use(Cors());

// db
DBConnect();

//server
app.listen(port, () => {
  console.log("server running on port", port);
  console.log(`http://localhost:${port}`);
});

// app routes
app.get("/", (req, res) => {
  res.status(200).json({
    time: "jfslakdjflk",
    msg: "uhadjksf",
  });
});
app.use("/products", productRouter);
