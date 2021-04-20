import express from 'express';
const router = express.Router();
import { bulletinController } from '../controller';
import { checkTokens, checkPermission, redirectNotice } from '../middleware';

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
// 유저 확인 후 게시글 작성
// router.post('/write', checkTokens, bulletinController.BulletIn_Write);

// 작성자 권한 확인 후 리다이렉트를 위한 엔드포인트
// router.post('/write', checkTokens, redirectNotice);
// 작성자 권한 테스트용
router.post('/write', redirectNotice);
// 작성자 권한이 일반 멤버일때
router.post('/write_common', bulletinController.BulletIn_Write);
// 작성자 권한이 admin, 혹은 super_admin일때
router.post('/write_admin', bulletinController.BulletIn_Write_all);

router.post('/write_re', checkTokens, bulletinController.BulletIn_re_wirte);

router.get('/test', bulletinController.test);

module.exports = router;
