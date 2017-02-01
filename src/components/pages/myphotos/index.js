import React, { Component } from 'react';
import { CameraRoll, Image, Text } from 'react-native';
import { DeckSwiper, Card, CardItem, View,Container  } from 'native-base';
import Layout from '../../layout';

export default class NewPlaylist extends Component {

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
        <View>
          <Text>Loading ...</Text>
        </View>
        );
    }

    return (

        <Layout header>
          <View>
              <DeckSwiper
                dataSource={this.state.images}
                renderItem={ image =>
                    <Card style={{ elevation: 1}}>
                        <CardItem>
                          <Image
                            style={{ resizeMode: 'cover', width: null }}
                            source={{ uri: image.uri }}
                          />
                        </CardItem>
                    </Card>
                }
              />
          </View>
        </Layout>

    );
  }
}
