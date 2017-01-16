import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Filters extends Component {
  render() {
    return (
        <View style={styles.filtersContainer}>
          {this.props.data.map((filterData, key) => {
            let selectedStyle = filterData.active ? styles.filterSelected : styles.filter;
            key !== 0 && delete selectedStyle.borderRadius;
            return Filter(filterData, key, selectedStyle)
          })}
        </View>
    );
  }
}

const Filter = (filter, key, selectedStyle) => (
  <Text style={selectedStyle} key={key}>{filter.title}</Text>
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
    padding: 10,
    color: '#ff8900',
    borderWidth: 1
  },
  filterSelected: {
    borderColor: '#ff8900',
    borderRadius: 4,
    borderStyle: 'solid',
    padding: 10,
    color: '#FFFFFF',
    backgroundColor: '#ff8900',
    borderWidth: 1
  },

};
