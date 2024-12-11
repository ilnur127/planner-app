import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import ObjectSelector from "./components/ObjectSelector";
import Canvas from "./components/Canvas";

const App = () => {
  return (
    <Provider store={store}>
      <div style={{ display: "flex", gap: "20px" }}>
        <ObjectSelector />
        <Canvas />
      </div>
    </Provider>
  );
};

export default App;
