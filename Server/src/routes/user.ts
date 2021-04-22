import express from 'express';
const router = express.Router();
import { usersController } from '../controller';
import { checkTokens, checkPermission } from '../middleware';

// * GET /users/login
router.get('/login', checkTokens, usersController.login);
// * GET /users/signup
router.post('/signup', checkTokens, checkPermission, usersController.signup);
// * GET /users/googleCallback
router.get('/googleCallback', usersController.googleCallback);
// * GET /users/test
router.get('/test', usersController.test);
// * GET /users/userinfo
router.get('/userinfo', checkTokens, usersController.userinfo);

module.exports = router;
