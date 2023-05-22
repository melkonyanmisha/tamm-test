import app from './app.js';
import config from './config.js';
import dbConnect from './database.js';

try {
  await dbConnect(config.DB_URI, config.DB_OPTS);

  app.listen(Number(config.APP_PORT), config.APP_HOST, () => {
    console.log(`Running on port: ${ config.APP_PORT }`);
  });
} catch (e) {
  console.error(e.message);
}
