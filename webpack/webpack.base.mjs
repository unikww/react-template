const config = {
  mode: "development",
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [{ loader: "style-loader", options: { esModule: true } }, "css-loader"],
      },
      {
        test: /\.[jt]sx?$/,
        loader: "esbuild-loader",
        options: {
          target: "es2015",
        },
      },
    ],
  },
};

export default config;
