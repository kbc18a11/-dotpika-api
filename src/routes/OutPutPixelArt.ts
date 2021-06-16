import { Response, Router } from 'express';
import Request from '../schemas/OutPutPixelArt';
import Obniz from 'obniz';

const router = Router();

/**
 * 送られてきたドット絵の内容を表示
 */
router.post('/', async (req: Request, res: Response) => {
  let obniz: Obniz | null;

  obniz = new Obniz(process.env.OBNIZ_ID, { auto_connect: false });

  const connected = await obniz.connectWait({ timeout: 5 });

  if (!connected) {
    return res.status(500).json('');
  }

  try {

    obniz.display.clear();
    obniz.display.print('WWWWWWWWWWWWWW');
    obniz.uart0.start({ gnd: 0, rx: 2, tx: 3, baud: 115200 });
    obniz.uart0.send([]);
  } catch (e) {
    console.error(e);

    return res.status(500).json('');
  } finally {
    if (obniz) {
      await obniz.closeWait();
    }
  }
  return res.json('');
});

export default router;
