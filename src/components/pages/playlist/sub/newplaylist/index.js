import React, { Component } from 'react';
import { List, ListItem, InputGroup, Input, Icon, Text, Picker, Button,Item } from 'native-base';
import Layout from '../../../../layout';

export default class NewPlaylist extends Component {



  render() {


    return (
      <Layout header>
        <List>
          <ListItem>
              <InputGroup>
                  <Input inlineLabel label="First Name" placeholder="John" />
              </InputGroup>
          </ListItem>

          <ListItem>
              <InputGroup>
                  <Icon name="ios-person" style={{ color: '#0A69FE' }} />
                  <Input placeholder="EMAIL" />
              </InputGroup>
          </ListItem>
          <ListItem>
              <InputGroup>
                  <Icon name="ios-unlock" style={{ color: '#0A69FE' }} />
                  <Input placeholder="PASSWORD" secureTextEntry />
              </InputGroup>
          </ListItem>
          <ListItem>
              <InputGroup>
                  <Icon name="ios-call" style={{ color: '#0A69FE' }} />
                  <Input placeholder="PHONE" keyboardType="numeric" />
              </InputGroup>
          </ListItem>

          <ListItem iconLeft>
              <Icon name="ios-transgender" style={{ color: '#0A69FE' }} />
              <Text>GENDER</Text>
              <Picker
                iosHeader="Select one"
                mode="dropdown" >
                  <Item label="Male" value="key0" />
                  <Item label="Female" value="key1" />
                  <Item label="Other" value="key2" />
              </Picker>
          </ListItem>

          <ListItem>
              <InputGroup >
                  <Input stackedLabel label="Permanent Address" placeholder="Address" />
              </InputGroup>
          </ListItem>
      </List>
    </Layout>
    );
  }
}
