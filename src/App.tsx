import React from "react";
import type { FC } from "react";

import styles from "./styles/index.module.css";
import logger from "./utils/logger";
import C from "./components/C";

const App: FC = (): JSX.Element => {
  return (
    <div className={styles.app}>
      Please create your React App by webpack!
      <C />
    </div>
  );
};

export default App;

logger.info("诚哥牛逼, dddd!");

logger.error("this is an error!");

logger.warn("this is warning!");
