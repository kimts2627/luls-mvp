import express from 'express';
const router = express.Router();
import { usersController } from '../controller';
import checkTokens from '../middleware/checkToken';

// * POST /users/login
router.get('/login', checkTokens, usersController.login);
router.get('/googleCallback', usersController.googleCallback);
router.get('/test', usersController.test);
router.get('/userinfo', checkTokens, usersController.userinfo);
router.post('/signup', usersController.signup);

module.exports = router;
