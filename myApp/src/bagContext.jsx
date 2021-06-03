import { createContext, useContext, useState } from "react";

const BagContext = createContext({});

export function BagStateProvider(props) {
  const { children } = props;
  const [content, setContent] = useState(new Set());

  const bag = {
    content,
    clear: () => {
      setContent(new Set());
    },
    add: (value) => {
      setContent((values) => {
        values.add(value);
        return values;
      });
    },
    remove: (value) => {
      setContent((values) => {
        values.remove(value);
        return values;
      });
    },
  };

  return <BagContext.Provider value={bag}>{children}</BagContext.Provider>;
}

export function useBag() {
  return useContext(BagContext);
}
