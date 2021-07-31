const EpisodioModel = require('../models/episodio.model');

exports.register = async (req, res, next) => {
   try {
      const data = await EpisodioModel.create(req.body);
      
      res.status(200).send({
         status: "succes",
         code: 200,
         data: data,
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
};
exports.findSerieById = async (req, res, next) => {
   try {
      console.log(req);
      const data = await EpisodioModel.find({serieId: req.params.id});
      
      res.status(200).send({
         status: "succes",
         code: 200,
         data: data,
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
};





