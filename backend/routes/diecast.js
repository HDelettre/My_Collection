const express = require('express');

// MULTER + AUTH
const multer = require('../config/multer.config');

const router = express.Router();

const diecastCtrl = require("../controllers/diecast");
const pictCtrl = require('../controllers/diecast.pictures');

// ROUTES
router.post('/', diecastCtrl.createDiecast);
router.get('/', diecastCtrl.getAllDiecast);
router.get('/:id', diecastCtrl.getOneDiecast);
router.patch('/:id', diecastCtrl.updateDiecast);
router.delete('/:id', diecastCtrl.deleteDiecast);

router.post('/addpict',multer, pictCtrl.addPicture);
router.get('/addpict/:id', pictCtrl.getOnePicture);

module.exports = router;