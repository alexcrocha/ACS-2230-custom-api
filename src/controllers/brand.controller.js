const { brandService } = require("../services");

const create = async (req, res) => {
  try {
    const brand = await brandService.create(req.params.categoryId, req.body);
    res.status(201).json({
      message: "Brand created successfully!",
      brand
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const list = async (req, res) => {
  try {
    const brands = await brandService.list(req.params.categoryId);
    res.status(200).json(brands);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const read = async (req, res) => {
  try {
    const brand = await brandService.read(req.params.categoryId, req.params.id);
    res.status(200).json(brand);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const brand = await brandService.update(req.params.categoryId, req.params.id, req.body);
    res.status(200).json({
      message: "Brand updated successfully!",
      brand
    });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const destroy = async (req, res) => {
  try {
    await brandService.destroy(req.params.categoryId, req.params.id);
    res.status(200).json({ message: "Brand deleted successfully!" });
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
