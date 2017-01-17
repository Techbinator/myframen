import React, { Component } from 'react';
import { Icon, Card, CardItem, Text } from 'native-base';
import { View, Image, TouchableOpacity } from 'react-native';

export default class ImageCards extends Component {
  render() {
    return (
      <Card
        style={styles.cards}
        dataArray={this.props.data} renderRow={(card) =>
          ImageCard(card)
        }
      />
    );
  }
}

const ImageCard = (card) => (

    <CardItem style={styles.CardItem}>
      <View style={styles.textContainer}>
        <Text style={styles.leftText}>{card.leftText}</Text>
        <Text style={styles.rightText}>{card.rightText}</Text>
      </View>
      <Image
        style={{ resizeMode: 'cover', width: null }}
        source={{ uri: card.image }}
      >
      <TouchableOpacity style={styles.TouchableOpacity}>
        <Icon
          name={card.selected ? 'ios-heart' : 'ios-heart-outline'}
          style={card.selected ? styles.cardSelected : styles.cardNotSelected}
        />
      </TouchableOpacity>
     </Image>

    </CardItem>
);

const styles = {
  cards: {
    backgroundColor: '#2B2B2B',
    borderColor: 'transparent',
  },
  CardItem: {
    borderColor: 'transparent',
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 3,
  },
  leftText: {
    color: '#797d7e',
    alignSelf: 'flex-start',
    fontSize: 14,
    marginLeft: 10
  },
  rightText: {
    alignSelf: 'flex-end',
    color: '#797d7e',
    fontSize: 12,
    marginRight: 10
  },
  TouchableOpacity: {
    position: 'absolute',
    bottom: 5,
    right: 15,
    backgroundColor: 'transparent',
  },
  cardSelected: {
    color: '#ff8900',
    fontSize: 35
  },
  cardNotSelected: {
    color: '#797d7e',
    fontSize: 35
  }
};
