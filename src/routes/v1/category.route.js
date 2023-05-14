const express = require("express");
const { categoryController } = require("../../controllers");
const { isAuth } = require("../../middleware");
const router = express.Router();

router.use(isAuth);

router.post('/', categoryController.create);
router.get('/', categoryController.list);
router.get('/:id', categoryController.read);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.destroy);

module.exports = router;
