import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Header, Button, Left, Right, Body, Icon, Title } from 'native-base';

class HeaderNav extends Component {

  // constructor
  constructor(props) {
    super(props);
  }

  // rendering side bar navigation
  render() {
    return (
      <Header style={{ backgroundColor: '#E71D36' }}>
          <Left>
              <Button transparent onPress={openDrawer}>
                  <Icon name='menu'/>
              </Button>
          </Left>
          <Body>
              <Title>LELANG 3</Title>
          </Body>
          <Right />
      </Header>
    )
  }
}

export default HeaderNav
