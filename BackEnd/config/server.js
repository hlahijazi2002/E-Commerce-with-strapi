module.exports = ({ env }) => ({
  url: "https://e-commerce-with-strapi-8.onrender.com",
  app: {
    keys: env.array("APP_KEYS"),
  },
  cors: {
    origin: ["https://delightful-platypus-38237c.netlify.app/"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    headers: "*",
    credentials: true,
  },
});
