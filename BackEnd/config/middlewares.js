module.exports = [
  "strapi::logger",
  "strapi::errors",
  {
    name: "strapi::security",
    config: {
      contentSecurityPolicy: {
        useDefaults: true,
        directives: {
          "connect-src": ["'self'", "https:"],
          "img-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "res.cloudinary.com"
          ], 
          "media-src": [
            "'self'",
            "data:",
            "blob:",
            "dl.airtable.com",
            "res.cloudinary.com"
          ],
          upgradeInsecureRequests: null
        }
      }
    }
  },
  {
    name: "strapi::cors",
    config: {
      origin: ["https://delightful-platypus-38237c.netlify.app"],
      methods: ["GET", "POST", "PUT", "DELETE"],
      headers: "*",
      credentials: true
    }
  },
  "strapi::poweredBy",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public"
];
