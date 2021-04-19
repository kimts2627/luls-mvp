import express from 'express';
const router = express.Router();
import { bulletinController } from '../controller';
import { checkTokens, checkPermission } from '../middleware';

// * GET /bulltein/BulletinList
router.get(
  '/list',
  checkTokens,
  checkPermission,
  bulletinController.BulletIn_List
);

// * GET /bulletin/BulletinList
// router.get('/BulletinList', bulletinController.BulletIn_List);
router.get(
  '/userlist',
  checkTokens,
  checkPermission,
  bulletinController.BulletIn_UserInfo
);

router.get('/BulletinReply', bulletinController.BulletIn_reply);

router.post(
  '/write',
  checkTokens,
  checkPermission,
  bulletinController.BulletIn_Write
);

router.get('/test', bulletinController.test);

module.exports = router;
