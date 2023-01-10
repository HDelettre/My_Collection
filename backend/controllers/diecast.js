const Diecast = require("../models/dieCast");

//
// CREATE DIECAST
//

exports.createDiecast = (req, res) => {
  const newDiecast = Diecast.build(req.body);
  (async () => {
    try {
      await newDiecast.save();
      return res.status(200).json({ newDiecast });
    } catch (error) {
      return res.status(400).json({ message: "Erreur ", error });
    }
  })();
};

//
// GET ONE DIESCAST
//

exports.getOneDiecast = (req, res) => {
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
  (async () => {
    try {
      await Diecast.update(req.body, {
        where: {
          model_id: req.params.id,
        },
      });
      return res.status(202).json({ message: "MODIFIED !" });
    } catch (error) {
      res.status(404).json({ message: "NOT MODIFIED", error });
    }
  })();
};

//
// DELETE DIECAST
//

exports.deleteDiecast = (req, res) => {
  (async () => {
    try {
      await Diecast.destroy({
        where: {
          model_id: req.params.id,
        },
      });
      return res.status(200).json({ message: "DELETED" });
    } catch (error) {
      res.status(404).json({ message: "NOT DELETED", error });
    }
  })();
};

//
// DIECAST SEARCH BY YEAR
//

exports.getAllDiecastByYear = (req, res) => {
  (async () => {
    try {
      const reponse = await Diecast.findAll({
        where: {
          year: req.params.id
        }
      });
      return res.status(200).send(reponse);
    } catch (error) {
      res.status(404).json({ message: "NON TROUVE", error });
    }
  })();
};