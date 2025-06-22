const express = require('express');
const router = express.Router();
const gridController = require('../controllers/gridController');

router.post('/save', gridController.saveGrid);
router.get('/all', gridController.getAllGrids);
router.get('/:id', gridController.getGridById);

module.exports = router;
