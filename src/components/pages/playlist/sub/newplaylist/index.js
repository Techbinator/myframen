import React, { Component } from 'react';
import {View, Picker} from 'react-native';
import { List, ListItem, InputGroup, Input, Icon, Text, Button, Row } from 'native-base';
import {Slider, H4} from 'nachos-ui';
import Layout from '../../../../layout';

export default class NewPlaylist extends Component {

  state = {
     sliderValue: 2,
     sliderMaxValue: 30,
     sliderAnimation: 'random'
   }

  render() {


    return (
      <Layout header>
        <List>
          <ListItem>
              <InputGroup>
                  <Icon name="ios-images" style={styles.icon}/>
                  <Input style={styles.text} placeholder="Playlist name" />
              </InputGroup>
          </ListItem>

          <ListItem>
            <View>
              <Text style={styles.text}>Time between slides: {this.state.sliderValue.toFixed(2)} sec</Text>
                <Slider
                  maxValue={this.state.sliderMaxValue}
                  value={this.state.sliderValue}
                  onValueChange={(time) => this.setState({sliderValue: time})}
                  style={styles.slider}
                />
            </View>
          </ListItem>

          <ListItem>
            <View>
              <Text style={styles.text}>Slider type</Text>
              <Picker style={styles.picker}
                selectedValue={this.state.sliderAnimation}
                onValueChange={(sa) => this.setState({sliderAnimation: sa})}>
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
    color: '#ff8900',
    alignSelf:'stretch',
  }
}
