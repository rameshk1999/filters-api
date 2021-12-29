import Dotenv from "dotenv";
import fs from "fs";
import ProductModel from "../models/ProductModel.js";
import { DBConnect } from "../config/DBConnect";

DBConnect();

const products = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, "utf-8"));

const importData = async () => {
  try {
    await ProductModel.create(products);
    console.log("Data imported succesfully");
  } catch (error) {
    console.log("import failed", error);
  }
};

const deletData = async () => {
  try {
    await ProductModel.deleteMany({});
    console.log("Data deleted succesfully");
  } catch (error) {
    console.log("delete failed", error);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deletData();
}
