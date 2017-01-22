import React, { Component } from 'react';
import Layout from '../../layout';
import Search from './sub/search';
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
    active: false
  },
  {
    title: 'New',
    active: false
  },
  {
    title: 'Moments',
    active: true
  },
  {
    title: 'Shared',
    active: false
  },
  {
    title: 'Others',
    active: false
  }
];

export default class MyPhotos extends Component {

  filterOnClick(e) {

  }

  render() {
    return (
      <Layout>
        <Search />
        <Filters data={filters} filterOnClick={this.filterOnClick.bind(this)} />
        <ImageCards data={cards} />
      </Layout>
    );
  }
}
