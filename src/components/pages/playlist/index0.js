import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import PhotoGrid from 'react-native-photo-grid';
import SortableGrid from 'react-native-sortable-grid';
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

class Playlist extends Component {

  startDelete = () => {
    console.log(
      this.refs.SortableGrid.toggleDeleteMode()
    )
  }

  filterOnClick(e) {

  }

  renderHeader() {
    return(
      <Text>I'm on top!</Text>
    );
  }

  renderItem(item, itemSize) {
    return(
      <TouchableOpacity
        key={item.id}
        style={{ width: itemSize, height: itemSize }}
        onPress={() => {
          // Do Something
        }}>
        <Image
          resizeMode = "cover"
          style = {{ flex: 1 }}
          source = {{ uri: item }}
        />
      </TouchableOpacity>
    )
  }

  render() {
    return (
      <Layout header>
        <Filters data={filters} filterOnClick={this.filterOnClick.bind(this)} />
        <SortableGrid
          itemsPerRow={3}
          ref={'SortableGrid'}
        >
          {
            this.props.playlists.map( (playlist) =>

              <View key={playlist.id} style={styles.block}>
                <Text>{playlist.playlistName}</Text>
              </View>

            )
          }
        </SortableGrid>
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
