/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import MenuFrame from './components/MenuFrame';
import MainFrame from './components/MainFrame';
import ResultFrame from './components/ResultFrame';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const AppNavigator = createStackNavigator(
  { MenuFrame: { screen: MenuFrame }, MainFrame: { screen: MainFrame }, ResultFrame: { screen: ResultFrame } },
  { headerMode: 'none' }
)
const AppNavigation = createAppContainer(AppNavigator);

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <AppNavigation />
      </>
    );
  }
}

export default App;
