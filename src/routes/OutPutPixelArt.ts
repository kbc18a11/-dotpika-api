import { Response, Router } from 'express';
import Request from '../schemas/OutPutPixelArt';
import Obniz from 'obniz';
import PixelArtConversionUartData from '@shared/PixelArtConversionUartData';
import SerialPort from 'serialport';

const router = Router();

/**
 * 送られてきたドット絵の内容を表示
 */
router.post('/', async (req: Request, res: Response) => {
  // 送られてきたドット絵のデータを16進数に変換
  //const uartData = PixelArtConversionUartData(req.body.Dots);

  let obniz: Obniz | null;

  obniz = new Obniz(process.env.OBNIZ_ID);

  if (!await obniz.connectWait({ timeout: 5 })) {
    throw new Error('Obnizが接続できませんでした。');
  }

  const uart = obniz.getFreeUart();
  try {
    uart.start({ gnd: 0, rx: 2, tx: 3, baud: 115200 });

    uart.send([0x23, 0x57, 0x4C, 0x00, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x00]);

    //await uart.send([0xAA, 0xAA, 0xAA, 0xAA, | 0xAA, 0xAA, 0xAA, 0xAA, | 0xAA, 0xAA, 0xAA, 0xAA]);

    //await uart.send([0x00]);
    //await obniz.uart0.send('$23$57$4C$01$00$AA$AA$AA$AA$AA$AA$AA$AA$AA$AA$AA$A5$00');
    return res.json('');
  } catch (e) {
    console.error(e);

    res.status(500).json(e);
  } finally {
    if (obniz) {
      uart.end();
      await obniz.closeWait();
    }
  }
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
    uart.start({ gnd: 0, rx: 2, tx: 3, baud: 115200 });

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

/**
 * USBから直接送る場合
 */
router.post('/usb', async (req: Request, res: Response) => {
  const serialPort = new SerialPort('/dev/ttyS3', { baudRate: 115200 });

  try {
    serialPort.on('open', function () {
      serialPort.write([0x23, 0x57, 0x4C, 0x00, 0x00, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0xFF, 0x00]);
    });

    serialPort.on('error', (e) => {
      console.error(e);
    });
  } catch (e) {
    console.error(e);

    return res.status(500).json(e);
  }

  return res.json('');
});

export default router;
