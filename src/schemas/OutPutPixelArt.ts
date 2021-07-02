import { Request } from 'express';
import Dot from '../types/Dot';

interface OutPutPixelArt extends Request {
  body: {
    Dots: Dot[][];
  }
}

export default OutPutPixelArt;
