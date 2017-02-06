import React, { Component } from 'react';
import { CameraRoll } from 'react-native';
import { View, Spinner } from 'native-base';
import { connect } from 'react-redux';
import Swipe from './sub/swipe';

import Layout from '../../layout';

class MyPhotos extends Component {

  constructor(props) {
    super(props);
    this.state = {
     images: [],
     isCameraLoaded: false
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

  render() {
    if (!this.state.isCameraLoaded) {
      return (
        <View style={styles.spinnerContainer}>
          <Spinner color="#ff8900" />
        </View>
        );
    }

    return (

        <Layout>
            <Swipe tabLabel='Swipe' images={this.state.images} playlists={this.props.playlists} />
        </Layout>

    );
  }
}

export default connect(
  state => ({ playlists: state.Playlists.playlists }))(MyPhotos);

const styles = {
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
