import { Router } from 'express';
import TemplatesPixelArt from './TemplatesPixelArt';
import OutPutPixelArtRouter from './OutPutPixelArt';
import TestMysql from './TestMysql';

// Init router and path
const router = Router();

// Add sub-routes
router.use('/pixel-arts-templates', TemplatesPixelArt);
router.use('/out-put-pixel-arts', OutPutPixelArtRouter);
router.use('/test-mysql', TestMysql);

// Export the base-router
export default router;
