import HtmlWebpackPlugin from "html-webpack-plugin";
import { merge } from "webpack-merge";

import baseConfig from "./webpack.base.mjs";

const config = {
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".jsx"],
  },
  cache: true,
};

export default merge(baseConfig, config);
