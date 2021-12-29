import Mongoose from "mongoose";

const url =
  "mongodb+srv://ramesh:ramesh@cluster0.edkbh.mongodb.net/advance-mern?retryWrites=true&w=majority";
export const DBConnect = async () => {
  try {
    await Mongoose.connect(url);
    console.log("DB connected");
  } catch (error) {
    console.log("err", error);
  }
};
