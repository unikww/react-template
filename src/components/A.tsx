import { observer } from "mobx-react";
import { Store } from "../stores/CouterStore";
import { useStores } from "../stores";
import { useEffect } from "react";

const AAA = (): JSX.Element => {
  const { counterStore } = useStores<{ counterStore: Store }>();

  useEffect(() => {
    console.log(2222);
  });

  return <>{counterStore.count}</>;
};

export default observer(AAA);
