import Mongoose from "mongoose";
import Dotenv from "dotenv";

Dotenv.config();
const url = process.env.DB_URL;
export const DBConnect = async () => {
  try {
    await Mongoose.connect(url);
    console.log("DB connected");
  } catch (error) {
    console.log("err", error);
  }
};
