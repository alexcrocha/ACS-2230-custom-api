const { Brand, Category } = require("../models");

const create = async (categoryId, { name, description }) => {
  try {
    const brand = new Brand({ name, description, category: categoryId });
    await brand.save();
    // Also update the category's brands array
    await Category.findByIdAndUpdate(categoryId, { $push: { brands: brand._id } });
    return brand;
  } catch (err) {
    throw err;
  }
}

const list = async (categoryId) => {
  try {
    return await Brand.find({ category: categoryId });
  } catch (err) {
    throw err;
  }
};

const read = async (categoryId, id) => {
  try {
    return await Brand.findOne({ _id: id, category: categoryId });
  } catch (err) {
    throw err;
  }
};

const update = async (categoryId, id, { name, description }) => {
  try {
    return await Brand.findOneAndUpdate({ _id: id, category: categoryId }, { name, description }, { new: true });
  } catch (err) {
    throw err;
  }
};

const destroy = async (categoryId, id) => {
  try {
    // Also remove the brand from the category's brands array
    await Category.findByIdAndUpdate(categoryId, { $pull: { brands: id } });
    await Brand.findOneAndDelete({ _id: id, category: categoryId });
  } catch (err) {
    throw err;
  }
};

module.exports = {
  create,
  list,
  read,
  update,
  destroy
};
