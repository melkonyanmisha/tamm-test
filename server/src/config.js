import dotenv from 'dotenv';

dotenv.config({ path: `.env.${ process.env.NODE_ENV }` });

const DEV_ENV = process.env.NODE_ENV === 'development';

const config = {
  APP_PORT: process.env.APP_PORT,
  APP_HOST: process.env.APP_HOST,
  APP_URL: process.env.APP_URL,
  DB_URI: process.env.DB_URI,
  DB_OPTS: {
    dbName: process.env.DB_NAME
  },
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
  CLIENT_URL: process.env.CLIENT_URL
}

if (!DEV_ENV) Object.assign(config.DB_OPTS, {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS
});

export default config;
