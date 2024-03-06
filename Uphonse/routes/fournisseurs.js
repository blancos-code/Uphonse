const express = require('express');
const {create, findAll, findOneById, deleteFournisseur, update} = require("../controllers/fournisseurController");
const router = express.Router();

router.get('/all', findAll);
router.get('/:id', findOneById);
router.post('/', create);
router.put('/', update);
router.delete('/:id', deleteFournisseur);


module.exports = router;

