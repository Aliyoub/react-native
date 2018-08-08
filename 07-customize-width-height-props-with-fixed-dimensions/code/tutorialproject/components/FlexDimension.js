import React, { Component } from 'react';
import { View } from 'react-native';

export default class FlexDimension extends Component {
  render() {
    return (
        <View style={ {flex: 1} }>
            <View style={{flex: 20, backgroundColor: 'mediumaquamarine'}} />
            <View style={{flex: 20, backgroundColor: '#1e90ff'}} />
            <View style={{flex: 60, backgroundColor: 'darkslategrey'}} />
        </View>
    );
  }
}