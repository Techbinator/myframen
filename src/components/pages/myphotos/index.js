import React, { Component } from 'react';
import { CameraRoll } from 'react-native';
import { View, Tabs,  Spinner } from 'native-base';
import Swipe from './sub/swipe';

import Layout from '../../layout';

export default class MyPhotos extends Component {

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
          <Spinner color="#ff8900"/>
        </View>
        );
    }

    return (

        <Layout>
          <Tabs>
            <Swipe tabLabel='Swipe' images={this.state.images} />
            <Swipe tabLabel='Select' images={this.state.images}/>
          </Tabs>
        </Layout>

    );
  }
}

const styles = {
  spinnerContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
}
