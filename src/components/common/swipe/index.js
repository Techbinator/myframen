import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import { View } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import SwipeCards from 'react-native-swipe-cards';
import _ from 'lodash';

import sliderEntryStyles, { sliderWidth, itemWidth } from './SliderEntry.style';
import SliderEntry from './SliderEntry';
import styles from './index.style';



export default class Swipe extends Component {

    getSlides() {
          return this.props.playlists.map((entry, index) => {
              return (
                  <SliderEntry
                    key={index}
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
          firstItem={0}
          inactiveSlideScale={0.94}
          inactiveSlideOpacity={0.6}
          enableMomentum={true}
          containerCustomStyle={styles.slider}
          contentContainerCustomStyle={styles.sliderContainer}
          showsHorizontalScrollIndicator={false}
          snapOnAndroid={true}
          removeClippedSubviews={false}
          onSnapToItem={this.props.selectPlaylist.bind(this)}
        >
            { this.getSlides() }
        </Carousel>
    );
}

handleNope(){

}

  render(){
    return (
      <View>
        <View style={{padding:10, flex:1, marginBottom:10, elevation: 3}}>
          <SwipeCards
            cards={this.props.images}

            renderCard={(image) => <Image indicator={() => <ProgressBar color="#ff8900"/>} style={{height:300, width: sliderWidth - 20, borderRadius: 10, borderWidth: 1, borderColor:"#fff"}} source={{ uri: image.uri }} />}
            renderNoMoreCards={() => <Text style={{color: '#ffffff'}}>No more cards</Text>}

            handleYup={this.props.handleYup.bind(this)}
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
