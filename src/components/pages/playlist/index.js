import React, { Component } from 'react';
import { ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';
import ImagesGrid from '../../common/ImagesGrid';
import Layout from '../../layout';
import Filters from '../../common/filters';


const filters = [
  {
    title: 'All',
    active: true
  },
  {
    title: 'My photos',
    active: false
  },
  {
    title: 'Inspiration',
    active: false
  }
];

const photos = [
  'https://unsplash.it/200/300/?random',
  'https://unsplash.it/200/300/?random',
  'https://unsplash.it/200/300/?random',
  'https://unsplash.it/200/300/?random',
  'https://unsplash.it/200/300/?random',
  'https://unsplash.it/200/300/?random',
  'https://unsplash.it/200/300/?random',
]

class Playlist extends Component {


  filterOnClick(e) {

  }

  render() {
    return (
      <Layout header>
        <Filters data={filters} filterOnClick={this.filterOnClick.bind(this)} />
        <ScrollView>
          {this.props.playlists.map((playlist) =>
            <ImagesGrid key={playlist.id} images={playlist.photos} title={playlist.playlistName} />
          )}
        </ScrollView>

      </Layout>
    );
  }
}

export default connect(
  state => ({ playlists: state.Playlists.playlists }))(Playlist);

const styles = {
  block: {
    flex: 1,
    margin: 8,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
};
