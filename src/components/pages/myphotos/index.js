import React, { Component } from 'react';
import { CameraRoll } from 'react-native';
import { View, Spinner } from 'native-base';
import { connect } from 'react-redux';
import Swipe from './sub/swipe';
import _ from 'lodash';
import { playlistAddPhoto } from '../../../actions';

import Layout from '../../layout';

class MyPhotos extends Component {

  constructor(props) {
    super(props);
    this.state = {
     images: [],
     isCameraLoaded: false,
     selectedPlaylist: 0
    };
  }

  componentWillMount() {
    CameraRoll.getPhotos({ first: 1000 }).then(
      (data) => {
        const assets = data.edges;
        const images = assets.map((asset) => asset.node.image);
        this.setState({
          isCameraLoaded: true,
          images: images
        });
      },
      (error) => {
        console.warn(error);
      }
    );
  }

  handleYup(image){
    const selectedDataId = this.props.playlists[this.state.selectedPlaylist].id;
    // this.props.playlistAddPhoto(selectedDataId, image.uri);
  }

  selectPlaylist(entry){
    this.setState({'selectedPlaylist': entry });
  }

  render() {
    console.log(this.props.playlists);
    if ( !this.state.isCameraLoaded || _.isEmpty(this.props.playlists)) {
      return (
        <View style={styles.spinnerContainer}>
          <Spinner color="#ff8900" />
        </View>
        );
    }

    return (

        <Layout>
            <Swipe tabLabel='Swipe'
              images={this.state.images}
              playlists={this.props.playlists}
              handleYup={this.handleYup.bind(this)}
              selectPlaylist={this.selectPlaylist.bind(this)}
            />
        </Layout>

    );
  }
}

MyPhotos.defaultProps = {
  playlists: []
};

  export default connect(
    state => ({
      playlists: _.orderBy(state.Playlists.playlists, ['id'], ['desc'])
    }),
    {
      playlistAddPhoto
    }
  )(MyPhotos);

const styles = {
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
