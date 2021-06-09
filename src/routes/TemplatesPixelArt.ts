import { Response, Router } from 'express';
import Request from '../schemas/OutPutPixelArt';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
  return res.json({ test: 'a' });
});

router.get('/uuu', async (req: Request, res: Response) => {
  return res.json({ test: 'saaa' });
});

export default router;
