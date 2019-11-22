/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import MenuFrame from './components/MenuFrame';

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <MenuFrame></MenuFrame>
      </>
    );
  }
}

export default App;
