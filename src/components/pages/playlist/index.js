import React, { Component } from 'react';
import Layout from '../../layout';

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

      </Layout>
    );
  }
}
