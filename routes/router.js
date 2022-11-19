import { Router } from 'express';
import  controller from '../controllers/controller.js';

const router = Router();

router.get('/', controller.index);

router.get('/ytsearch', controller.ytsearch);
router.get('/downmp3', controller.ytDownMp3);
router.get('/downmp4', controller.ytDownMp4);
router.get('/fatosRandom', controller.fatcosRandom);


export default router;
