import React from "react";
import type { FC } from "react";

import styles from "./styles/index.module.css";

console.log(process);

const App: FC = (): JSX.Element => {
  return <div className={styles.app}>Please create your React App by webpack!</div>;
};

export default App;
