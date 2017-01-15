import React, { Component } from 'react';
import { Container, Content, Footer } from 'native-base';
import theme from '../../Theme';
import FooterLayout from './sub/footer';


export default class Layout extends Component {

  render() {
    return (
      <Container theme={theme} style={styles.layout}>
        <Content>
          {this.props.children}
        </Content>
        <Footer theme={theme}>
          <FooterLayout />
        </Footer>
      </Container>
    );
  }
}
const styles = {
   layout: {
    backgroundColor: '#2B2B2B',
    paddingTop: 15
  }
};
