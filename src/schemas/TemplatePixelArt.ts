import { Request } from 'express';

interface TemplatePixelArt extends Request {
  body: {
    name: string;
  }
}

export default TemplatePixelArt;
