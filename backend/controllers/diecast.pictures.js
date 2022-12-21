const Diecast_Pictures = require('../models/diecast.pictures');

exports.addPicture = (req, res) => {
  const newPict = Diecast_Pictures.build (req.body);
  ( async () => {
    try{
      await newPict.save();
      return res.status(201).json({message: 'Image enregistrée !'})
    } catch (error) {
      return res.status(500).json({message: 'Erreur serveur ', error})
    }
  })();
}