const Diecast = require("../models/dieCast");

//
// CREATE DIECAST
//

exports.createDiecast = (req, res) => {
  (async () => {
    const newDiecast = Diecast.build(
     req.body
    );
    await newDiecast.save();
    return res.status(200).json({ message: "createDiecast" });
  })();
};

//
// GET ONE DIESCAST
//

exports.getOneDiecast = (req, res) => {
  console.log("reqparams: ", req.params.id);
  (async () => {
    try {
      const reponse = await Diecast.findOne({
        where: {
          model_id: req.params.id,
        },
      });
      res.status(200).send({ reponse });
    } catch (error) {
      res.status(404).json({ message: "NON TROUVE", error });
    }
  })();
};

//
// GET ALL DIECAST
//

exports.getAllDiecast = (req, res) => {
  (async () => {
    try {
      const reponse = await Diecast.findAll();
      return res.status(200).send(reponse);
    } catch (error) {
      res.status(404).json({ message: "NON TROUVE", error });
    }
  })();
};

//
// UPDATE DIECAST
//

exports.updateDiecast = (req, res) => {
  ( async () => {
    try {
      await Diecast.update(
      req.body ,
      { where: {
        model_id: req.params.id
      }}
    )
    return res.status(202).json({message: "MODIFIED !"})
    }catch (error) {
      res.status(404).json({ message: "NOT MODIFIED", error });
    }
    
  })();
};

//
// DELETE DIECAST
//

exports.deleteDiecast = (req, res) => {
  ( async () => {
    try {
      await Diecast.destroy({
        where: {
          model_id: req.params.id
        }
      })
      return res.status(200).json({message: 'DELETED'});
    }catch (error) {
      res.status(404).json({ message: "NOT DELETED", error });
    }
  })();
};
