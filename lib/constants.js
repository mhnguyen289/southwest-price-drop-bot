const ENV = process.env;

const ADMIN_NAME = ENV.ADMIN_NAME || ENV.USER_NAME;
const PASSWORD = ENV.PASSWORD || ENV.USER_PASSWORD;

const DEVELOPMENT = ENV.DEVELOPMENT === 'true';

const PLIVO_ID = ENV.PLIVO_ID;
const PLIVO_TOKEN = ENV.PLIVO_TOKEN;
const PLIVO_NUMBER = ENV.PLIVO_NUMBER;

const PORT = ENV.PORT;

const REDIS_URL = ENV.REDIS_URL;

module.exports = {
  ADMIN_NAME,
  PASSWORD,
  DEVELOPMENT,
  PLIVO_ID,
  PLIVO_TOKEN,
  PLIVO_NUMBER,
  PORT,
  REDIS_URL
};
