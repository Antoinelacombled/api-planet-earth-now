module.exports = ({ env }) => ({
  url: "https://api-planet-earth-now-98409e4028dd.herokuapp.com",
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
