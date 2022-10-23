import { Router } from 'express';
import  controller from '../controller/controller.js';

const router = Router();

router.get('/', controller.index);

router.get('/mp3', controller.ytMp3);

export default router;
