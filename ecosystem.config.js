module.exports = {
    apps: [
      {
        name: "Magic Fi v1",
        script: "yarn",
        args: "start",
        env: {
          NODE_ENV: "production",
        },
      },
    ],
  };