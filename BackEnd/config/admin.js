module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET'),
  },
  apiToken: {
    salt: env('API_TOKEN_SALT'),
  },
  transfer: {
    token: {
      salt: env('TRANSFER_TOKEN_SALT'),
    },
  },
  session: {
    secret: env('ADMIN_COOKIE_SECRET', 'a-long-default-cookie-secret'),
    cookie: {
      // Set secure to false to allow cookies over HTTP
      secure: false, 
    },
  },
});
