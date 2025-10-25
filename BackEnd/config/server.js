module.exports = ({ env }) => ({
  url: env('PUBLIC_URL', 'http://localhost:1337'),
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secure: false,
    },
  },
  cors: {
    origin: ['*'],
    credentials: true,
  },
});
