import { Request } from 'express';
import Dot from '../types/Dot';

interface OutPutPixelArt extends Request {
  body: {
    dots: Dot[][];
  }
}

export default OutPutPixelArt;
