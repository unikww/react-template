import { merge } from "webpack-merge";

import baseConfig from "./webpack.base.mjs";

const config = {
  plugins: [],
  cache: {
    type: "filesystem",
    allowCollectingMemory: true,
  },
  devtool: "inline-cheap-source-map",
  stats: "error-only",
};

export default merge(baseConfig, config);
