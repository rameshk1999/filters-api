import Mongoose from "mongoose";

const CategorySchema = new Mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default Mongoose.model("categories", CategorySchema);
