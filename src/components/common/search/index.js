import React, { Component } from 'react';
import { View } from 'react-native';
import { InputGroup, Input, Icon } from 'native-base';

export default class Search extends Component {
  render() {
    return (
      <View style={styles.View}>
        <InputGroup borderType='rounded' >
            <Icon name='ios-search' style={styles.icon} />
            <Input placeholder={this.props.placeholder} style={styles.input} onChangeText={ this.props.onChangeText.bind(this)} />
        </InputGroup>
      </View>
    );
  }
}

const styles = {
  View: {
    alignItems: 'center',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    marginBottom: 15,
  },
  icon: {
    color: '#727272',
    marginLeft: 5,
  },
  input: {
    color: '#FFFFFF'
  }
};
