const { Category } = require("../models");

const create = async ({ name }) => {
  try {
    const category = new Category({ name });
    await category.save();
    return category;
  } catch (err) {
    throw err;
  }
}

const list = async () => {
  try {
    return await Category.find().populate('brands', 'name');
  } catch (err) {
    throw err;
  }
};

const read = async (id) => {
  try {
    return await Category.findById(id).populate('brands', 'name');
  } catch (err) {
    throw err;
  }
};

const update = async (id, { name }) => {
  try {
    return await Category.findByIdAndUpdate(id, { name }, { new: true });
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    await Category.findByIdAndDelete(id);
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
