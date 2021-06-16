import { Response, Router } from 'express';
import Request from '../schemas/OutPutPixelArt';
import mysql from '../shared/mysql';

const router = Router();

/**
 * MySQLのテスト
 * 参考サイト
 * https://deezus.net/nodejs-mysql/
 */
router.post('/', async (req: Request, res: Response) => {
  try {
    const data = await (await mysql()).query('SELECT * FROM tamplate_pixel_art');

    return res.json(data);
  } catch (e) {
    console.error(e);
  } finally {
    //切断処理
    await (await mysql()).end();
  }

});

export default router;

