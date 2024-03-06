const express = require('express');
const {create, findAll, findOneById, deleteLivreur, update} = require("../controllers/livreurController");
const router = express.Router();

router.get('/all', findAll);
router.get('/:id', findOneById);
router.post('/', create);
router.put('/', update);
router.delete('/:id', deleteLivreur);

module.exports = router;

