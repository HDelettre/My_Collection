const express = require('express');

// MULTER + AUTH

const router = express.Router();

const diecastCtrl = require("../controllers/diecast");


// ROUTES
router.post('/', diecastCtrl.createDiecast);
router.get('/', diecastCtrl.getAllDiecast);
router.get('/:id', diecastCtrl.getOneDiecast);
router.patch('/:id', diecastCtrl.updateDiecast);
router.delete('/:id', diecastCtrl.deleteDiecast);

module.exports = router;