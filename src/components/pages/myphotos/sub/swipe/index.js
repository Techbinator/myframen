import React, { Component } from 'react';
import { Image, ScrollView, Text, StyleSheet } from 'react-native';
import { View } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import SwipeCards from 'react-native-swipe-cards';

import sliderEntryStyles, { sliderWidth, itemWidth } from './SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles from './index.style';


export default class Swipe extends Component {

    getSlides() {
          return this.props.playlists.map((entry, index) => {
              return (
                  <SliderEntry
                    key={`carousel-entry-${index}`}
                    even={(index + 1) % 2 === 0}
                    title={entry.playlistName}
                    images={entry.photos}
                  />
              );
          });
      }

      get PlaylistItem() {
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
            { this.getSlides() }
        </Carousel>
    );
}

handleYup(){

}

handleNope(){

}

  render(){
    return (
      <View>
        <View>
          <SwipeCards
            cards={this.props.images}

            renderCard={(image) => <Image style={{height:300, width: sliderWidth, marginBottom:20}} source={{ uri: image.uri }} />}
            renderNoMoreCards={() => <Text>No more cards</Text>}

            handleYup={this.handleYup}
            handleNope={this.handleNope}
          />
        </View>
        <View>
          <ScrollView
            style={styles.scrollview}
            indicatorStyle={'white'}
            scrollEventThrottle={200}
          >
              { this.PlaylistItem }
          </ScrollView>
        </View>

      </View>
    );
  }
}
