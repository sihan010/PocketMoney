import React, { Component } from 'reactn';
import DrawerNavigator from './src/navigation/DrawerNavigator'

export default class App extends Component {
  constructor(props) {
    super(props);
    //This State is accessable from all over the app by this.global.{key} [Class components only]
    this.setGlobal({
      allCrypto: null,
      loading: false,
      startIndex: 1
    })
  }
  
  render() {
    return (
      <DrawerNavigator />
    );
  }
}

