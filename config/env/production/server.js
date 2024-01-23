module.exports = ({ env }) => ({
  url: "https://api-planet-earth-now-98409e4028dd.herokuapp.com",
  proxy: true,
  host: "0.0.0.0",
  port: process.env.PORT,
  app: {
    keys: env.array("APP_KEYS"),
  },
  admin: {
    auth: {
      secret: env("ADMIN_JWT_SECRET"),
    },
  },
});
