import express from 'express';
const router = express.Router();
import { bulletinController } from '../controller';
import { checkTokens, checkPermission } from '../middleware';

// * GET /bulltein/Bulletin
router.get(
  '/BulletinList',
  checkTokens,
  checkPermission,
  bulletinController.BulletIn_List
);

router.get('/BulletinList', bulletinController.BulletIn_List);
router.get(
  '/BulletinUserList',
  checkTokens,
  checkPermission,
  bulletinController.BulletIn_UserInfo
);

module.exports = router;
