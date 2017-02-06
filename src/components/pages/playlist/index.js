import React, { Component } from 'react';
import { ScrollView, Image, View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';
import { connect } from 'react-redux';
import _ from 'lodash';
import ImagesGrid from '../../common/ImagesGrid';
import Search from '../../common/search';
import Layout from '../../layout';
import Filters from '../../common/filters';

class Playlist extends Component {

  state = {
    filters: [
      {
        title: 'All',
        active: true,
        key: 'all'
      },
      {
        title: 'My photos',
        active: false,
        key: 'my_photos'
      },
      {
        title: 'Inspiration',
        active: false,
        key: 'inspiration'
      }
    ],
    searchPlaylist: ''
  }


  filterOnClick(filter) {

    const filters = this.state.filters.map(item => {
      item.active = item.key === filter;
      return item;
    });
    this.setState({'filters': filters});
  }

  onSearchChange(data){
    this.setState({'searchPlaylist': data });
  }

  filterCollection(){
    let playlists = _.orderBy(this.props.playlists, ['id'], ['desc']);
    const selectedFilter = _.find(this.state.filters, { "active": true }).key;
    return playlists.filter((playlist) => {

      if( selectedFilter !== 'all' && selectedFilter !== playlist.type){
        return false;
      }
      return this.state.searchPlaylist ? _.includes(playlist.playlistName.toLowerCase(), this.state.searchPlaylist.toLowerCase()) : true;
    });
  }

  render() {
    return (
      <Layout header>
        <Search placeholder="Search playlist ..." onChangeText={this.onSearchChange.bind(this)} />
        <Filters style={styles.filters} data={this.state.filters} filterOnClick={this.filterOnClick.bind(this)} />
        <ScrollView style={styles.scrollview}>
          {this.filterCollection.call(this).map((playlist) =>
            <Card key={playlist.id} style={styles.card}>
                        <CardItem>
                            <Text style={styles.orangeText}>{playlist.playlistName}</Text>
                        </CardItem>

                        <CardItem>
                            <ImagesGrid images={playlist.photos} title={playlist.playlistName} />
                        </CardItem>

                        <CardItem style={styles.bottomContainer}>
                            <Button transparent>
                                <Icon name="ios-reorder" />
                                Edit
                            </Button>
                            <Button transparent>
                              <Icon name="md-send" style={styles.orangeText} />
                              <Text style={styles.orangeText}>Send to framen</Text>
                            </Button>
                        </CardItem>
                   </Card>
          )}
        </ScrollView>

      </Layout>
    );
  }
}

export default connect(
  state => ({ playlists: state.Playlists.playlists }))(Playlist);

const styles = {

  scrollview: {
    marginTop: 15
  },

  filters: {
    marginBottom: 10,
  },

  card: {
    flex: 1,
    margin: 8,
    borderColor: '#ff8900',
  },

  bottomContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between'
  },

  orangeText: {
    color: '#ff8900'
  }

};
