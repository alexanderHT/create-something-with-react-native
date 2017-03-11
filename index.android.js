/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Navigator,
  View
} from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Drawer } from 'native-base';

import HeaderNav from './src/components/HeaderNav.js'
import SlideCategorys from './src/components/SlideCategorys.js'
import FormRegisterItem from './src/components/FormRegisterItem.js'

import SideBar from './src/components/SideBar.js'

export default class AwesomeProject2 extends Component {

  renderNewScene (route, navigator) {

    switch(route.name){
      case 'Home' : return (<Container><HeaderNav /><SlideCategorys  navigator={navigator} /></Container>)
      case 'FormRegisterItem' : return (<FormRegisterItem navigator={navigator} />)
    }

  }

  render() {

    closeDrawer = () => {
      this._drawer._root.close()
    };
    openDrawer = () => {
      this._drawer._root.open()
    };
    const that = this
    return (

      <Drawer
        style={{ backgroundColor: 'white' }}
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} sendCloseDrawer={closeDrawer} />}
        onClose={() => closeDrawer()}
      >

      <Container>

          <View style={{ flex: 1 }}>
              <Navigator
                initialRoute ={{name:'Home'}}
                renderScene={that.renderNewScene}
               />
           </View>

      </Container>

      </Drawer>
    );
  }
}

AppRegistry.registerComponent('AwesomeProject2', () => AwesomeProject2);
