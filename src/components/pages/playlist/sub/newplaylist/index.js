import React, { Component } from 'react';
import { CameraRoll, Image, View, Text } from 'react-native';
import { DeckSwiper, Card, CardItem } from 'native-base';
import Layout from '../../../../layout';

export default class NewPlaylist extends Component {

  constructor(props) {
    super(props);
    this.state = {
     images: [],
     isCameraLoaded: false
    };
  }

  componentWillMount() {
    CameraRoll.getPhotos({ first: 20 }).then(
      (data) => {
        const assets = data.edges;
        const images = assets.map((asset) => asset.node.image);
        console.log(images);
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
        <View>
          <Text>Loading ...</Text>
        </View>
        );
    }

    return (
      <Layout header>
        <DeckSwiper
          dataSource={this.state.images}
          renderItem={image =>
              <Card style={{ elevation: 3 }}>
                  <CardItem>
                      <Image
                        style={{ resizeMode: 'cover', width: null }}
                        source={{ uri: image.uri }}
                      />
                  </CardItem>
              </Card>
          }
        />
      </Layout>
    );
  }
}
