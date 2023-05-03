const categoryServices = require('../services/category.service');

const createCategory = async (req, res, next) => {
  const categoryInfo = req.body;

  try {
    const category = await categoryServices.createCategory(categoryInfo);

    res.status(201).json({
      category,
    });
  } catch (error) {
    res.status(400).json({
      error: error.errors[0]?.message,
    });
  }
};

const getAllCategories = async (req, res, next) => {
  try {
    const categories = await categoryServices.getAllCategories();

    res.status(200).json({ categories });
  } catch (error) {
    res.status(400).json({
      error: error.errors[0]?.message,
    });
  }
};

module.exports = {
  createCategory,
  getAllCategories,
};
