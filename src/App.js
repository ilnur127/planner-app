import React from "react";
import { Provider } from "react-redux";

import store from "./store";
import RoutesComponent from "./components/Routes";

const App = () => {
  return (
    <Provider store={store}>
      <RoutesComponent />
    </Provider>
  );
};

export default App;
