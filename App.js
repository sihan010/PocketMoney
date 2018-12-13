import React, { Component } from 'reactn';
import TabNavigator from './src/navigation/TabNavigator'
import DrawerNavigator from './src/navigation/DrawerNavigator'

export default class App extends Component {
  constructor(props) {
    super(props);
    //This State is accessable from all over the app by this.global.{key} [Class components only]
    this.setGlobal({
      apiKey: "8affdc826b55fb229ffdc1c7f08c6005a91fb8058774a4484560782e2ae60b10",
      allCrypto: null,
      loading: false,
      startIndex: 1
    })
  }

  render() {
    //<TabNavigator />
    return (
      <DrawerNavigator />
    );
  }
}

