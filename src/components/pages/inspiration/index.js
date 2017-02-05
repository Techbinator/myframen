import React, { Component } from 'react';
import Layout from '../../layout';
import Search from '../../common/search';
import ImageCards from './sub/cards';
import Filters from '../../common/filters';

//dummy data to be removed
const cards = [
  {
    image: 'https://unsplash.it/200/300/?random',
    selected: true,
    leftText: 'Leo Davinci',
    rightText: '6367 Followers'
  },
  {
    image: 'https://unsplash.it/200/300/?random',
    selected: false,
    leftText: 'Michelangelo',
    rightText: '230 Followers'
  },
  {
    image: 'https://unsplash.it/200/300/?random',
    selected: false,
    leftText: 'Rembrandt',
    rightText: '1230 Followers'
  },
];

const filters = [
  {
    title: 'All',
    active: false,
    key: 'all'
  },
  {
    title: 'New',
    active: false,
    key: 'new'
  },
  {
    title: 'Moments',
    active: true,
    key: 'moments'
  },
  {
    title: 'Shared',
    active: false,
    key: 'shared'
  },
  {
    title: 'Others',
    active: false,
    key: 'others'
  }
];

export default class MyPhotos extends Component {

  filterOnClick(e) {

  }

  onSearchChange(data){
    console.log(data);
  }

  render() {
    return (
      <Layout>
        <Search placeholder="Search images ..." onChangeText={this.onSearchChange.bind(this)}/>
        <Filters data={filters} filterOnClick={this.filterOnClick.bind(this)} />
        <ImageCards data={cards} />
      </Layout>
    );
  }
}
