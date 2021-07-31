const { Router } = require('express');
const authMiddleware = require('../middlewares/auth');

const EpisodioController = require('../controllers/EpisodioController');

const router = Router();
// router.use(authMiddleware);
router.route('/register').post(EpisodioController.register);
router.route('/findseriebyid/:id').get(EpisodioController.findSerieById);
module.exports = router;
