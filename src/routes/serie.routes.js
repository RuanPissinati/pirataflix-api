const { Router } = require('express');
const authMiddleware = require('../middlewares/auth');

const SerieController = require('../controllers/SerieController');

const router = Router();
// router.use(authMiddleware);
router.route('/register').post(SerieController.register);
router.route('/allseries').get(SerieController.getAllSeries);
router.route('/findoneserie/:id').get(SerieController.findOneSerie);
router.route('/deleteserieandeps/:id').get(SerieController.deleteSerieAndEps);
module.exports = router;