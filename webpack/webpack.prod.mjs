import { merge } from "webpack-merge";

import baseConfig from "./webpack.base.mjs";

const config = {
  performance: {
    hints: false,
  },
  devtool: false,
};

export default merge(baseConfig, config);
