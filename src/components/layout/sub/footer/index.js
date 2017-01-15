import React, { Component, PropTypes } from 'react';
import { FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

class FooterLayout extends Component {
  static propTypes = {
    routes: PropTypes.object,
  };

  render() {
    return (
      <FooterTab>
        <Button
          onPress={Actions.Inspiration}
          active={this.props.routes.scene.sceneKey === 'Inspiration'}
        >
          Inspiration
          <Icon name="ios-aperture-outline" />
        </Button>
        <Button
          onPress={Actions.Favorites}
          active={this.props.routes.scene.sceneKey === 'Favorites'}
        >
          Favorites
          <Icon name="ios-heart" />
        </Button>
        <Button
          onPress={Actions.MyPhotos} 
          active={this.props.routes.scene.sceneKey === 'MyPhotos'}
        >
          My Photos
          <Icon name="ios-images" />
        </Button>
        <Button active={this.props.routes.scene.sceneKey === 'Playlist'}>
          Playlist
          <Icon name="ios-list-box" />
        </Button>
        <Button active={this.props.routes.scene.sceneKey === 'Chats'}>
          Chats
          <Icon name="ios-chatbubbles" />
        </Button>
      </FooterTab>
    );
  }
}

export default connect(({ routes }) => ({ routes }))(FooterLayout);
