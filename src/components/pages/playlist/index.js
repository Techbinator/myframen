import React, { Component } from 'react';
import Layout from '../../layout';
import Filters from '../../common/filters';

const filters = [
  {
    title: 'Shuffle',
    active: false
  },
  {
    title: 'Repeat',
    active: true
  },
  {
    title: 'Play all',
    active: false
  }
];

export default class Playlist extends Component {

  filterOnClick(e) {

  }

  render() {
    return (
      <Layout header>
        <Filters data={filters} filterOnClick={this.filterOnClick.bind(this)} />
      </Layout>
    );
  }
}
