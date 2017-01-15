import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Filters extends Component {
  render() {
    return (
        <View style={styles.filtersContainer}>
          {this.props.data.map((filterData, key) => Filter(filterData, key))}
        </View>
    );
  }
}

const Filter = (filter, key) => (
  <Text style={styles.filter} key={key}>{filter.title}</Text>
);

const styles = {
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filter: {
    borderColor: '#ff8900',
    borderRadius: 4,
    borderStyle: 'solid',
    borderWidh: 10,
    padding: 10,
    color: '#ff8900',
  }


};
