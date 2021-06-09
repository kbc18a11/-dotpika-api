import { Response, Router } from 'express';
import Request from '../schemas/OutPutPixelArt';

const router = Router();

/**
 * 送られてきたドット絵の内容を表示
 */
router.post('/', async (req: Request, res: Response) => {
  return res.json({ test: 'a' });
});

export default router;
