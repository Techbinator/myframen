import React, { Component } from 'react';
import { FooterTab, Button, Icon } from 'native-base';

export default class FooterLayout extends Component {
  render() {
    return (
      <FooterTab>
        <Button>
          Inspiration
          <Icon name="ios-aperture-outline" />
        </Button>
        <Button>
          Favorites
          <Icon name="ios-heart" />
        </Button>
        <Button active>
          My Photos
          <Icon name="ios-images" />
        </Button>
        <Button>
          Playlist
          <Icon name="ios-list-box" />
        </Button>
        <Button>
          Chats
          <Icon name="ios-chatbubbles" />
        </Button>
      </FooterTab>
    );
  }
}
