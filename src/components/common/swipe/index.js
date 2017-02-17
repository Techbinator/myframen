import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import Image from 'react-native-image-progress';
import ProgressBar from 'react-native-progress/Bar';
import { View } from 'native-base';
import Carousel from 'react-native-snap-carousel';
import SwipeCards from 'react-native-swipe-cards';
import _ from 'lodash';

import styles, { sliderWidth, itemWidth, slideHeight } from './index.style';
import SliderEntry from './SliderEntry';



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
          enableMomentum
          containerCustomStyle={styles.sliderContainer}
          contentContainerCustomStyle={styles.sliderContainer}
          showsHorizontalScrollIndicator={false}
          snapOnAndroid
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
      <View style={{ flexDirection: 'column', justifyContent: 'space-between', flex:1}}>
        <View style={{padding:10, flex:2, marginBottom:10, elevation: 3}}>
          <SwipeCards
            cards={this.props.images}

            renderCard={(image) => <Image indicator={() => <ProgressBar color="#ff8900"/>} style={{flex:1, width: sliderWidth - 20, borderRadius: 10, borderWidth: 1, borderColor:"#fff"}} source={{ uri: image.uri }} />}
            renderNoMoreCards={() => <Text style={{color: '#ffffff'}}>No more cards</Text>}
            smoothTransition

            handleYup={this.props.handleYup.bind(this)}
            handleNope={this.handleNope}
          />
        </View>
        <View style={{flex:1}}>
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
