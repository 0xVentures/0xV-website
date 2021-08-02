require('dotenv').config();
const express = require('express');
const cors = require('cors');
const compression = require('compression');
const helmet = require('helmet');
require('./src/db/setupDB');

const router = require('./src/router');
require('./src/auth/routes/verifyRoute');
require('./src/auth/routes/authRoute');
require('./src/auth/routes/nonceRoute');
require('./src/dashboard/routes/dashboardRoute');

const app = express();

/**
 * That middleware helps us deal with all the Cross Site Origin PITA.
 */
app.use(cors());
/**
 * Compression pacakge let us use gzip and make response payloads weight less = better performance.
 */
app.use(compression());
/**
 * Helmet middleware helps protects the app from well know vulnerabilities.
 */
app.use(helmet());
app.use('/api/v1/', router);

try {
  app.listen(process.env.PORT, () => {
    console.log('🐂  0xVentures server started at port 3002 \n');
  });
} catch (e) {
  console.info('❌ Connection failed', e);
}
