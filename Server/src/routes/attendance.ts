import express from 'express';
const router = express.Router();
import { attController } from '../controller';

router.get('/list', attController.att_list);

module.exports = router;
