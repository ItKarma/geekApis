import { Router } from 'express';
import  controller from '../controllers/controller.js';

const router = Router();

router.get('/', controller.index);

router.get('/ytSearch', controller.Search);
router.get('/downMp3', controller.ytDownMp3);
router.get('/downMp4', controller.ytDownMp4)


export default router;
