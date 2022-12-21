const express = require('express');
const multer = require('multer');

// MULTER + AUTH

const router = express.Router();

const diecastCtrl = require("../controllers/diecast");
const pictCtrl = require('../controllers/diecast.pictures');


// ROUTES
router.post('/', diecastCtrl.createDiecast);
router.get('/', diecastCtrl.getAllDiecast);
router.get('/:id', diecastCtrl.getOneDiecast);
router.patch('/:id', diecastCtrl.updateDiecast);
router.delete('/:id', diecastCtrl.deleteDiecast);

router.post('/addpic', multer, pictCtrl.addPicture);

module.exports = router;