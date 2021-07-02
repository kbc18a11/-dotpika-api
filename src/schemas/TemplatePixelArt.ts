import { Request } from 'express';
import Dot from '../types/Dot';

interface TemplatePixelArt extends Request {
  body: {
    name: string;
    example_image: string;
    Dots: Dot[][];
  }
}

export default TemplatePixelArt;
