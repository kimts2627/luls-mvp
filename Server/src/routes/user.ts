import express from 'express';
const router = express.Router();
import { usersController } from '../controller';

// * POST /users/login
router.get('/login', usersController.login);
router.get('/googleCallback', usersController.googleCallback);

module.exports = router;
