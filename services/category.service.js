const { category } = require('../models');

const createCategory = (categoryInfo) => {
  return category.create(categoryInfo);
};

const getAllCategories = () => {
  return category.findAll();
};

module.exports = {
  createCategory,
  getAllCategories,
};
