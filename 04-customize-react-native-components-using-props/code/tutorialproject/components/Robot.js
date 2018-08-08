import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Robot extends Component {
  render() {
      const imageSource = {
          uri: "https://thegadgetflow.com/wp-content/uploads/2015/07/BUDDY-06.jpg"
      };      
    return (
        <Image source={ imageSource }
                style={ {width: 300, height: 200} }
        >
        </Image>
    );
  }
}
