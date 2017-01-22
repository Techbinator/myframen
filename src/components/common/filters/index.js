import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Filters extends Component {
  render() {
    return (
        <View style={styles.filtersContainer}>
          {this.props.data.map((filterData, key) => {
            const selectedStyle = filterData.active ? styles.filterSelected : styles.filter;
            return Filter(filterData, key, selectedStyle);
          })}
        </View>
    );
  }
}

const Filter = (filter, key, selectedStyle) => (
  <TouchableOpacity key={key}>
    <Text style={selectedStyle}>{filter.title}</Text>
  </TouchableOpacity>
);

const styles = {
  filtersContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  filter: {
    borderColor: '#ff8900',
    borderStyle: 'solid',
    padding: 10,
    color: '#ff8900',
    borderWidth: 1
  },
  filterSelected: {
    borderColor: '#ff8900',
    borderStyle: 'solid',
    padding: 10,
    color: '#FFFFFF',
    backgroundColor: '#ff8900',
    borderWidth: 1
  },

};
