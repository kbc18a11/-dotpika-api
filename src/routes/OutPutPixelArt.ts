import { Response, Router } from 'express';
import Request from '../schemas/OutPutPixelArt';
import Obniz from 'obniz';
import sleep from '../shared/sleep';

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

  const uart = obniz.getFreeUart();
  try {
    uart.start({ gnd: 0, rx: 2, tx: 3, baud: 115200 });

    await uart.send([0x23, 0x53, 0x4C, 0x01, 0x00,
      0x11, 0x11, 0x11, 0x11, 0x11, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA, 0xAA,
      0x00]);
    //await obniz.uart0.send('$23$57$4C$01$00$AA$AA$AA$AA$AA$AA$AA$AA$AA$AA$AA$A5$00');
  } catch (e) {
    console.error(e);

    return res.status(500).json('');
  } finally {
    if (obniz) {
      await uart.end();
      //await obniz.closeWait();
    }
  }
  return res.json('');
});

/**
 * LEDをリセット
 */
router.post('/rset', async (req: Request, res: Response) => {
  let obniz: Obniz | null;

  obniz = new Obniz(process.env.OBNIZ_ID, { auto_connect: false });

  const connected = await obniz.connectWait({ timeout: 5 });

  if (!connected) {
    return res.status(500).json('');
  }

  const uart = obniz.getFreeUart();
  try {
    uart.start({ gnd: 0, rx: 1, tx: 2, baud: 115200 });

    await uart.send([0x23, 0x53, 0x4C, 0x00, 0x00,
      0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00,
      0x00]);
    //await obniz.uart0.send('$23$57$4C$01$00$AA$AA$AA$AA$AA$AA$AA$AA$AA$AA$AA$A5$00');
  } catch (e) {
    console.error(e);

    return res.status(500).json('');
  } finally {
    if (obniz) {
      await uart.end();
      await obniz.closeWait();
    }
  }
  return res.json('');
});


export default router;
