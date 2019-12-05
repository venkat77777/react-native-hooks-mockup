import React, { Component } from "react";
import AppContextProvider, { AppConsumer } from "./context";
import LoginContainer from "./containers/LoginContainer";

class App extends Component {
  render() {
    return (
      <AppContextProvider>
        <AppConsumer>{data => <LoginContainer />}</AppConsumer>
      </AppContextProvider>
    );
  }
}

export default App;
