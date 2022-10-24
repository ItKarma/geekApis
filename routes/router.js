import { Router } from 'express';
import  controller from '../controller/controller.js';

const router = Router();

router.get('/', controller.index);

router.get('/mp3', controller.ytMp3);
router.get('/ytdown', controller.ytDown)

export default router;
