import { Request } from 'express';
import Dot from '../types/Dot';

interface TemplatePixelArt extends Request {
  body: {
    name: string;
    example_image: string;
    // 文字列化されたオブジェクト
    Dots: string;
  }
}

export default TemplatePixelArt;
