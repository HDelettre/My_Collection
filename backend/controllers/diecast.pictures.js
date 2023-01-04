const Diecast_Pictures = require('../models/diecast.pictures');

exports.addPicture = (req, res) => {
  console.log('REQ BODY ADD PICTURE: ', req.body);
  
  const newPict = Diecast_Pictures.build (req.body);

  const pictureFile = JSON.parse(JSON.stringify(req.files.model_picture))[0];

  console.log('pictureFile: ', req.files.model_picture);

  newPict["pictureName"] = pictureFile.filename;

  console.log('pictureName: ', newPict);

  ( async () => {
    try{

      await newPict.save();
      return res.status(201).json({message: 'Image enregistrée !'})
    } catch (error) {
      return res.status(500).json({message: 'Erreur serveur ', error})
    }
  })();
}

exports.getOnePicture = (req, res) => {
  console.log ('REQ.PARAMS: ', req.params);
  (async () => {
    try {
      const reponse = await Diecast_Pictures.findOne({
        where: {
          diecast_id: parseInt(req.params.id),
        },
      });
      console.log('REPONSE: ',reponse.pictureName)
      res.status(200).send({ reponse });
    } catch (error) {
      res.status(404).json({ message: "NON TROUVE", error });
    }
  })();
}