import Obniz from 'obniz';

let obniz: Obniz | null;



export const sendEnd = () => {

};

/**
 * 初期化処理
 */
export const init = async () => {
  if (obniz) {
    obniz = new Obniz(process.env.OBNIZ_ID, { auto_connect: false });
  }

  if (await obniz.connectWait({ timeout: 5 })) {
    throw new Error('Obnizが接続できませんでした。');
  }
};

