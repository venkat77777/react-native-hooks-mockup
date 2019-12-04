import React, { Component } from "react";
import AppContextProvider, { AppConsumer } from "./context";
import LoginScreen from "./screens/Login/LoginScreen";

class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <AppConsumer>{data => <LoginScreen />}</AppConsumer>
      </AppContextProvider>
    );
  }
}

export default App;
