const express = require('express');
const {create, findAll, findOneById, deleteCommande, update} = require("../controllers/commandeController");
const router = express.Router();

router.get('/all', findAll);
router.get('/:id', findOneById);
router.post('/', create);
router.put('/', update);
router.delete('/:id', deleteCommande);

module.exports = router;

