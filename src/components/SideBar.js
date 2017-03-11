import React, { Component } from 'react'
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Button, Icon, Drawer, Thumbnail } from 'native-base';
class SideBar extends Component {

  // constructor
  constructor(props) {
    super(props);
  }

  // rendering side bar navigation
  render() {
    return (
      <View style={{ backgroundColor: 'white', height: '100%' }}>
        <View style={{ backgroundColor: '#E71D36', height: '35%', padding: 30 }}>
          <Text style={{color: 'white', textAlign: 'center'}}>Alexander Hendrawan T</Text>
        </View>
        <Button transparent>
            <Icon name='logo-apple' onPress={this.props.sendCloseDrawer}/>
            <Text style={{ marginLeft: 15}}>Home</Text>
        </Button>
        <Button transparent>
          <Icon name='logo-apple' onPress={this.props.toForm}/>
          <Text style={{ marginLeft: 15}}>Form register Item</Text>
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  profile:{
    backgroundColor: 'red'
  }
});

export default SideBar
