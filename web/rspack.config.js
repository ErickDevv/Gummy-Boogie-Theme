const config = {
  entry: {
    main: "./src/main.tsx",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                },
              },
            },
          },
        ],
        type: "css",
      },
      {
        test: /\.(png|svg|jpg)$/,
        type: "asset/resource",
      },
    ],
  },
  builtins: {
    html: [
      {
        template: "./index.html",
      },
    ],
  },
};
module.exports = config;
