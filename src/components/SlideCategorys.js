/**
  * Show Slide Category
  */

import React, { Component } from 'react';
import {
  Text,
  View,
  Dimensions,
  StyleSheet,
  Image
} from 'react-native';

import Carousel from 'react-native-looped-carousel';

const { width, height } = Dimensions.get('window');

class SlideCategorys extends Component {

  constructor(props) {
    super(props);

    this.state = {
      size: { width, height },
    };
  }

  _onLayoutDidChange = (e) => {
    const layout = e.nativeEvent.layout;
    this.setState({ size: { width: layout.width, height: layout.height } });
  }

  render() {
    return (
      
      <View style={{ flex: 1 }} onLayout={this._onLayoutDidChange}>
        <Carousel
          delay={6000}
          style={this.state.size}
          autoplay
          pageInfo
          onAnimateNextPage={(p) => console.log(p)}
        >
          <View style={[this.state.size]}>
            <Image source={{uri: 'http://38.media.tumblr.com/262cbf9e3499ef3adbfba2ed74ce536b/tumblr_mvi4h0D9Iz1qfrua3o1_500.jpg'}} style={this.state.size}/>
          </View>
          <View style={[ this.state.size]}>
            <Image source={{uri: 'https://2e0a24317f4a9294563f-26c3b154822345d9dde0204930c49e9c.ssl.cf1.rackcdn.com/10857206_the-spirit-of-rolex--a-crown-for-every_8342c185_m.jpg?bg=AEABA9'}} style={this.state.size}/>
          </View>
          <View style={[this.state.size]}>
            <Image source={{uri: 'http://i.ebayimg.com/00/s/MTYwMFg4NDk=/z/MqsAAOSwA3dYDlHR/$_58.JPG'}} style={this.state.size}/>
          </View>
        </Carousel>
      </View>
    );
  }
}

export default SlideCategorys
