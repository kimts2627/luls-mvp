import express from 'express';
const router = express.Router();
import { bulletinController } from '../controller';
import { checkTokens, checkPermission } from '../middleware';

// * GET /bulltein/BulletinList
router.get(
  '/BulletinList',
  checkTokens,
  checkPermission,
  bulletinController.BulletIn_List
);

// * GET /bulletin/BulletinList
// router.get('/BulletinList', bulletinController.BulletIn_List);
router.get(
  '/BulletinUserList',
  checkTokens,
  checkPermission,
  bulletinController.BulletIn_UserInfo
);

router.get('/BulletinReply', bulletinController.BulletIn_reply);

router.post(
  '/BulletinWrite',
  checkTokens,
  checkPermission,
  bulletinController.BulletIn_Write
);

router.get('/test', bulletinController.test);

module.exports = router;
