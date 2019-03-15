import React, { Component } from 'react';
import Home from './components/Home';
import { AppContainer } from './component_styles/AppStyles'
class App extends Component {
  render() {
    return (
      <AppContainer>
        <Home />
      </AppContainer>
    );
  }
}

export default App;
