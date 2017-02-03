import React, { Component } from 'react';
import { View, Picker, Alert } from 'react-native';
import { List, ListItem, InputGroup, Input, Icon, Text } from 'native-base';
import { Slider } from 'nachos-ui';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import _ from 'lodash'
import Layout from '../../../../layout';
import { playlistCreate } from '../../../../../actions'

class NewPlaylist extends Component {

   state = {
     id: 1,
     playlistName: 'Playlist name',
     playlistSlideTimeout: 2,
     playlistAnimation: 'random',
     active: false,
   }

   preparePlaylistCreate(playlists, newPlaylist){

      if(_.isEmpty(playlists)){
        return newPlaylist;
      }

      const latestPlaylist =  _.maxBy(playlists, 'id');
      return {
        ...newPlaylist,
        id: latestPlaylist.id + 1
      }
   }

   savePlaylist(){
      this.props.playlistCreate('playlists', this.preparePlaylistCreate(this.props.playlists, this.state));
      Actions.Playlist();
   }

   setSliderName(playlistName){
      const pn = playlistName ? playlistName : 'Playlist name'
      this.setState({'playlistName': pn})
      Actions.refresh(
        {
          title: pn,
          rightTitle: playlistName ? 'Save' : '',
          titleStyle: playlistName ?  styles.selectedTitleStyle: styles.titleStyle,
          onRight: this.savePlaylist.bind(this),
        }
      );
   }

  render() {
    return (
      <Layout header>
        <List>
          <ListItem>
              <InputGroup>
                  <Icon name="ios-images" style={styles.icon} />
                  <Input maxLength = {50} style={styles.text} placeholder="Playlist name" onChangeText={ this.setSliderName.bind(this)}/>
              </InputGroup>
          </ListItem>

          <ListItem>
            <View>
              <Text style={styles.text}>Time between slides: {this.state.playlistSlideTimeout.toFixed(2)} sec</Text>
                <Slider
                  maxValue={30}
                  value={this.state.playlistSlideTimeout}
                  onValueChange={(time) => this.setState({playlistSlideTimeout: time})}
                  style={styles.slider}
                />
            </View>
          </ListItem>

          <ListItem>
            <View>
              <Text style={styles.text}>Slider type</Text>
              <Picker style={styles.picker}
                itemStyle={styles.iosItemStyle}
                selectedValue={this.state.playlistAnimation}
                onValueChange={(sa) => this.setState({playlistAnimation: sa})}>
                <Picker.Item label="Random" value="random" />
                <Picker.Item label="Fade Out" value="fadeout" />
                <Picker.Item label="Fade In" value="fadein" />
              </Picker>
            </View>
          </ListItem>
      </List>
    </Layout>
    );
  }
}

export default connect(
  state => ({
    playlists: state.Playlists.playlists
  }),
  {
    playlistCreate
  }
)(NewPlaylist)

const styles = {
  icon: {
    color: '#ff8900',
  },
  text: {
    fontSize: 18,
    marginBottom:10
  },
  slider: {
    alignSelf:'center'
  },
  picker: {
    alignSelf:'stretch',
  },
  iosItemStyle: {
    color: '#ffffff'
  },
  titleStyle: {
    color: '#6b6b6b',
  },
  selectedTitleStyle: {
    color: '#ff8900',
  },
}
