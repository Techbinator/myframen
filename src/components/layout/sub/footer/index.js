import React, { Component } from 'react';
import { Icon } from 'native-base';
import { Text, View } from 'react-native';


export default class FooterTabLayout extends Component {

  render() {
    let IconName = '';
    switch (this.props.sceneKey) {
      case 'Inspiration':
         IconName = 'ios-aperture-outline';
        break;
      case 'Favorites':
         IconName = 'ios-heart';
        break;
      case 'MyPhotos':
         IconName = 'ios-images';
        break;
      case 'Playlist':
         IconName = 'ios-list-box';
        break;
      case 'Chats':
         IconName = 'ios-chatbubbles';
        break;
      default:
         IconName = 'ios-images';
    }
    return (
      <View style={styles.View}>
        <Icon style={this.props.selected ? styles.selectedIcon : styles.Icon} name={IconName} />
        <Text style={this.props.selected ? styles.selectedText : styles.Text}>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = {
  View: {
    backgroundColor: '#2B2B2B',
    paddingTop: 2,
    paddingBottom: 2
  },
  selectedText: {
    color: '#FF8900',
    fontSize: 12,
    textAlign: 'center',
  },
  selectedIcon: {
    color: '#FF8900',
    textAlign: 'center',
  },
  Text: {
    color: '#6b6b6b',
    fontSize: 12,
    textAlign: 'center',
  },
  Icon: {
    color: '#6b6b6b',
    textAlign: 'center',
  }
};
