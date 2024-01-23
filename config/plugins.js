module.exports = ({ env }) => ({
  "netlify-deployments": {
    enabled: true,
    config: {
      accessToken: process.env.NETLIFY_DEPLOYMENTS_PLUGIN_ACCESS_TOKEN,
      sites: [
        {
          name: "Site 1",
          id: "b37df6bf-a0d1-4cad-aa25-f8ba3cf6b433",
          buildHook: "https://api.netlify.com/build_hooks/<hook_id>",
          branch: "master", // optional
        },
      ],
    },
  },
});
