const { categoryService } = require("../services");

const create = async (req, res) => {
  try {
    const category = await categoryService.create(req.body);
    res.status(201).json({
      message: "Category created successfully!",
      category
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const list = async (req, res) => {
  try {
    const categories = await categoryService.list();
    res.status(200).json(categories);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const read = async (req, res) => {
  try {
    const category = await categoryService.read(req.params.id);
    res.status(200).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const category = await categoryService.update(req.params.id, req.body);
    res.status(200).json({
      message: "Category updated successfully!",
      category
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  try {
    await categoryService.destroy(req.params.id);
    res.status(200).json({ message: "Category deleted successfully!" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  create,
  list,
  read,
  update,
  destroy
};
