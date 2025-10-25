module.exports = ({ env }) => ({
  url: "https://e-commerce-with-strapi-8.onrender.com",
  app: {
    keys: env.array("APP_KEYS"),
  },
});
