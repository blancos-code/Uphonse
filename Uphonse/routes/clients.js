const express = require('express');
const {create, findAll, findOneById, deleteClient, update} = require("../controllers/clientController");
const router = express.Router();

router.get('/all', findAll);
router.get('/:id', findOneById);
router.post('/', create);
router.put('/', update);
router.delete('/:id', deleteClient);

module.exports = router;

