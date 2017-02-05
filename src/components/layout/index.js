import React, { Component } from 'react';
import { Container, View, Content } from 'native-base';
import theme from '../../Theme';


export default class Layout extends Component {

  render() {
    return (
      <Container theme={theme} style={this.props.header ? styles.layoutWithHeader : styles.layout}>
        <View>
          {this.props.children}
        </View>
      </Container>
    );
  }
}
const styles = {
   layout: {
    backgroundColor: '#2B2B2B',
    paddingTop: 20,
    paddingBottom: 20,
  },
  layoutWithHeader: {
    backgroundColor: '#2B2B2B',
    paddingTop: 70,
    paddingBottom: 50,
  }
};
