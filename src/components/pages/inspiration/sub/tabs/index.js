import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Filters extends Component {
  render() {
    return (
      <View>
        this.props.filters.map((filter) => {
          Filter( filter )
        })
      </View>
    );
  }
}

const Filter = (filter) => (
  <Text>{filter.title}</Text>
);

const styles = {

};
