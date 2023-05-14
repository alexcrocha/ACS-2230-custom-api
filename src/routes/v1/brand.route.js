const express = require("express");
const { brandController } = require("../../controllers");
const { isAuth } = require("../../middleware");
const router = express.Router();

router.use(isAuth);

router.post('/', brandController.create);
router.get('/', brandController.list);
router.get('/:id', brandController.read);
router.put('/:id', brandController.update);
router.delete('/:id', brandController.destroy);

module.exports = router;
