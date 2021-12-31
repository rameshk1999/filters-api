import categoryModel from "../models/categoryModel.js";

export const createCategories = async (req, res) => {
  try {
    await categoryModel
      .insertMany([
        {
          categoryName: "electronics",
        },
        {
          categoryName: "jewelery",
        },
        {
          categoryName: "men's clothing",
        },
        {
          categoryName: "women's clothing",
        },
      ])
      .then((result) => {
        res.status(200).json({
          data: result,
          status: 200,
        });
      });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
      status: 500,
    });
  }
};

export const getCategories = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    res.status(200).json({
      data: categories,
      status: 200,
    });
  } catch (error) {
    return res.status(500).json({
      msg: error.message,
      status: 500,
    });
  }
};
