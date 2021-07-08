import './preStart'; // Must be the first import
import "reflect-metadata";
import app from '@server';
import logger from '@shared/Logger';


// Start the server
const port = 5000;

app.listen(port, () => {
    console.log(process.env.AWS_ACCESSKEYID);

    logger.info('Express server started on port: ' + port);
});
