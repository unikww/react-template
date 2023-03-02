import HtmlWebpackPlugin from "html-webpack-plugin";
import Dotenv from "dotenv-webpack";
import NodePolyfillPlugin from "node-polyfill-webpack-plugin";
import webpack from "webpack";

const { NODE_ENV, TARGET } = process.env;

const isDev = NODE_ENV === "development";

const config = {
  mode: NODE_ENV,
  entry: ["core-js", "./src/index.tsx"],
  output: {
    filename: "main.js",
    publicPath: TARGET === "GitHub" ? "/react-template/" : "/",
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
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
    fallback: {
      fs: false,
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    // new Dotenv({
    //   path: isDev ? "./.env.development" : "./.env.production",
    // }),
    new NodePolyfillPlugin(),
    new webpack.ProvidePlugin({
      process: "process/browser",
    }),
  ],
};

export default config;
