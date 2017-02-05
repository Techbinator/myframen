import React, { Component } from 'react';
import { Image, Text, StatusBar, ScrollView, View } from 'react-native';
import { DeckSwiper, Card, CardItem } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles from './index.style';

export const ENTRIES1 = [
    {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'http://i.imgur.com/UYiroysl.jpg'
    },
    {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'http://i.imgur.com/UPrs1EWl.jpg'
    },
    {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'http://i.imgur.com/MABUbpDl.jpg'
    },
    {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'http://i.imgur.com/KZsmUi2l.jpg'
    },
    {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'http://i.imgur.com/2nCt3Sbl.jpg'
    },
    {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'http://i.imgur.com/lceHsT6l.jpg'
    }
];

export default class Swipe extends Component {

  getSlides (entries) {
          if (!entries) {
              return false;
          }

          return entries.map((entry, index) => {
              return (
                  <SliderEntry
                    key={`carousel-entry-${index}`}
                    even={(index + 1) % 2 === 0}
                    {...entry}
                  />
              );
          });
      }

      get example1 () {
    return (
        <Carousel
          sliderWidth={sliderWidth}
          itemWidth={itemWidth}
          firstItem={1}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.6}
          enableMomentum={true}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContainer}
          showsHorizontalScrollIndicator={false}
          snapOnAndroid={true}
          removeClippedSubviews={false}
        >
            { this.getSlides(ENTRIES1) }
        </Carousel>
    );
}

  render(){
    return (
      <View style={{ flexDirection: 'column', justifyContent: 'space-between'}}>
        <View>
          <DeckSwiper
            style={{padding:10, flex:0}}
            dataSource={this.props.images}
            renderItem={ image =>
                <Card style={{ elevation: 3}}>
                    <CardItem>
                      <Image
                        style={{ resizeMode: 'cover', width: null }}
                        source={{ uri: image.uri }}
                      />
                    </CardItem>
                </Card>
            }
          />
        </View>
        <View>
          <ScrollView
            style={styles.scrollview}
            indicatorStyle={'white'}
            scrollEventThrottle={200}
          >
              { this.example1 }
          </ScrollView>
        </View>

      </View>
    );
  }
}
