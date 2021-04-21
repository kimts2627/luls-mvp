import express from 'express';
const router = express.Router();
import { bulletinController } from '../controller';
import { checkTokens, checkPermission } from '../middleware';

// * GET /bulltein/BulletinList
router.get('/list', bulletinController.BulletIn_List);

// * GET /bulletin/BulletinList
// router.get('/BulletinList', bulletinController.BulletIn_List);
router.get(
  '/userlist',
  checkTokens,
  checkPermission,
  bulletinController.BulletIn_UserInfo
);

// 작성자 권한에 따라 공지사항 or 게시글 작성
router.post('/write', checkTokens, bulletinController.BulletIn_Write);

router.post('/write_re', checkTokens, bulletinController.BulletIn_re_wirte);

router.get('/test', bulletinController.test);

module.exports = router;
