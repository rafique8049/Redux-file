import "./App.css";
import React from "react";
import { Landing } from "./Components/Landing";
import { Provider } from "react-redux";
import { configStore } from "./state/reducer/store/configStore";

function App() {
  const myStore = configStore();

  return (
    <React.Fragment>
      <Provider store={myStore}>
        <Landing />
      </Provider>
    </React.Fragment>
  );
}

export default App;
