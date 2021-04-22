import express from 'express';
const router = express.Router();
import { attController } from '../controller';
import { checkTokens } from '../middleware';

router.get('/list', attController.att_list);

router.get('/userlist', checkTokens, attController.my_att);

module.exports = router;
