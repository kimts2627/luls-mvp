import express from 'express';
const router = express.Router();
import { usersController } from '../controller';
import { checkTokens, checkPermission } from '../middleware';

// * POST /users/login
router.get('/login', checkTokens, checkPermission, usersController.login);
router.get('/googleCallback', usersController.googleCallback);
router.get('/test', usersController.test);
router.get('/userinfo', checkTokens, usersController.userinfo);
router.post('/signup', checkTokens, checkPermission, usersController.signup);

module.exports = router;
