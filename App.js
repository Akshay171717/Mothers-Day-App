
import React from 'react';

import {createSwitchNavigator, createAppContainer} from 'react-navigation'
import Message from './Screens/Message';
import Welcome from './Screens/Welcome';
export default class App extends React.Component {
  render(){
    return (
      <AppContainer/>
      );
  }
  
}
const SwitchNavigator=createSwitchNavigator({
 Welcome:Welcome,
 Message:Message
})
const AppContainer=createAppContainer(SwitchNavigator)

