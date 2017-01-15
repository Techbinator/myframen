import React, { Component } from 'react';
import { Text } from 'react-native';
import { Container, Content, Footer } from 'native-base';
import theme from '../../Theme';
import FooterLayout from './Footer';


export default class Layout extends Component {

  render() {
    return (
      <Container theme={theme}>
        <Content>
          <Text>Testtttt</Text>
        </Content>
        <Footer theme={theme}>
          <FooterLayout />
        </Footer>
      </Container>
    );
  }
}
