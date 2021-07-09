import SerialPort from 'serialport';

const serialPort = new SerialPort('COM3', { baudRate: 230400 });

/**
 * シリアルポートの動作用、コールバック関数
 * @param e
 */
export const serialPortEventCallBack = (e) => {
  if (e) {
    throw new Error(e)
  }
}

/**
 * シリアルポートの動作用、コールバック関数
 * @param e
 */
export const write = (uartData: number[]) => {
  serialPort.write(uartData, (e) => { serialPortEventCallBack(e); });
}


serialPort.on('data', (e) => { serialPortEventCallBack(e); });
serialPort.on('close', (e) => { serialPortEventCallBack(e); });
//serialPort.on('error', (e) => { throw new Error(e); });

serialPort.on('open', (e) => { serialPortEventCallBack(e); });
