const SerieModel = require('../models/serie.model');
const EpisodioModel = require('../models/episodio.model');
exports.deleteSerieAndEps = async (req, res, next) => {
   try {
      let episodios = await EpisodioModel.find({serieId: req.params.id});
      let serie = await SerieModel.findOne({_id: req.params.id});
      serie.deleteOne()
      for (const i in episodios) {
         episodios[i].deleteOne();
      }
      let episodiosApagados = await EpisodioModel.find({serieId: req.params.id});
      res.status(200).send({
         status: "succes",
         code: 200,
         data: episodiosApagados,
         message: "Serie foi e todos os episodios foram deletado com sucesso."
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
}
exports.register = async (req, res, next) => {
   try {
      const data = await SerieModel.create(req.body);
      
      res.status(200).send({
         status: "succes",
         code: 200,
         data: data,
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
};

exports.getAllSeries = async (req, res, next) => {
   try {
      const data = await SerieModel.find({});
      
      res.status(200).send({
         status: "succes",
         code: 200,
         data: data,
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
};
exports.findOneSerie = async (req, res, next) => {
   try {
      const data = await SerieModel.findOne({_id: req.params.id});
      
      res.status(200).send({
         status: "succes",
         code: 200,
         data: data,
      });
   } catch (error) {
      res.status(400).send(error.message);
   }
};


