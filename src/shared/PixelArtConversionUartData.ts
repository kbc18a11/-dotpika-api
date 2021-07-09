import Dot from '../types/Dot';

/**
 * 2進数で表された文字列を0x00の16進数に変換させる
 * @param colorBinaries 
 */
function conversionHexadecimal(colorBinaries: string) {
  return Number(`0x${parseInt(colorBinaries, 2).toString(16).toUpperCase()}`);
}

export default (colDots: Dot[][]) => {
  let uartData = [0x23, 0x57, 0x41, 0x00, 0x00];

  colDots.map((rowDots) => {
    const rowData: number[] = [];

    const redData: number[] = [];
    const greenData: number[] = [];
    const blueData: number[] = [];

    const colorBinaries = {
      red: '',
      green: '',
      blue: ''
    };

    rowDots.map((dot) => {
      colorBinaries.red += String(dot.red);
      colorBinaries.green += String(dot.green);
      colorBinaries.blue += String(dot.blue);

      if (colorBinaries.red.length === 8) {
        redData.push(conversionHexadecimal(colorBinaries.red));
        greenData.push(conversionHexadecimal(colorBinaries.green));
        blueData.push(conversionHexadecimal(colorBinaries.blue));

        colorBinaries.red = '';
        colorBinaries.green = '';
        colorBinaries.blue = '';
      }
    });

    redData.map((byteNumber) => {
      rowData.push(byteNumber);
    });

    greenData.map((byteNumber) => {
      rowData.push(byteNumber);
    });

    blueData.map((byteNumber) => {
      rowData.push(byteNumber);
    });

    rowData.map((byteNumber) => {
      uartData.push(byteNumber);
    });
  });
  // 終端データを挿入
  uartData.push(0x00);

  return uartData;
};
