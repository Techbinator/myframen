import React, {Component} from 'react';
import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';

const {width, height} = Dimensions.get('window');

import SingleImage from './single-image';

export default class ImagesGrid extends Component {


    renderImages() {
        const { images } = this.props;
        const imageCount = images.length;
        switch(imageCount) {
            case 0:
              return (
                  <View style={styles.imageContainer}>
                      <SingleImage image={{uri: 'http://www.autotime.ro/public/images/noimage.jpg'}} />
                  </View>
              );
              break;
            //1 image
            case 1:
                return (
                    <View style={styles.imageContainer}>
                        <SingleImage image={{uri: images[0]}} />
                    </View>
                );
                break;

            case 2:
                return(
                    <TouchableWithoutFeedback onPress={this.openImages.bind(this)}>
                        <View style={styles.imageContainer}>
                            <Image style={[styles.img, {marginBottom: 4}]} source={{uri:images[0]}}/>
                            <Image style={styles.img} source={{uri:images[1]}}/>
                        </View>
                    </TouchableWithoutFeedback>
                );
                break;
            case 3:
                return(
                    <TouchableWithoutFeedback onPress={this.openImages.bind(this)}>
                        <View style={styles.imageContainer}>
                            <Image style={[styles.img, {marginBottom: 4}]} source={{uri:images[0]}}/>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Image style={[styles.img, {marginRight: 2}]} source={{uri:images[1]}}/>
                                <Image style={[styles.img, {marginLeft: 2}]} source={{uri:images[2]}}/>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                );
                break;
            case 4:
                return(
                    <TouchableWithoutFeedback onPress={this.openImages.bind(this)}>
                        <View style={styles.imageContainer}>
                            <View style={{flexDirection: 'row', flex: 1, marginBottom: 4}}>
                                <Image style={[styles.img, {marginRight: 2}]} source={{uri:images[0]}}/>
                                <Image style={[styles.img, {marginLeft: 2}]} source={{uri:images[1]}}/>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Image style={[styles.img, {marginRight: 2}]} source={{uri:images[2]}}/>
                                <Image style={[styles.img, {marginLeft: 2}]} source={{uri:images[3]}}/>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                );
                break;
            case 5:
                return(
                    <TouchableWithoutFeedback onPress={this.openImages.bind(this)}>
                        <View style={styles.imageContainer}>
                            <View style={{flexDirection: 'row', flex: 1, marginBottom: 4}}>
                                <Image style={[styles.img, {marginRight: 2}]} source={{uri:images[0]}}/>
                                <Image style={[styles.img, {marginLeft: 2}]} source={{uri:images[1]}}/>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Image style={[styles.img, {marginRight: 2}]} source={{uri:images[2]}}/>
                                <Image style={[styles.img, {marginLeft: 2, marginRight: 2}]} source={{uri:images[3]}}/>
                                <Image style={[styles.img, {marginLeft: 2}]} source={{uri:images[4]}}/>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                );
                break;
            default:
                //for cases with 5+ pictures
                //@TODO render images with more than 6
                return(
                    <TouchableWithoutFeedback onPress={this.openImages.bind(this)}>
                        <View style={styles.imageContainer}>
                            <View style={{flexDirection: 'row', flex: 1, marginBottom: 4}}>
                                <Image style={[styles.img, {marginRight: 2}]} source={{uri:images[0]}}/>
                                <Image style={[styles.img, {marginLeft: 2}]} source={{uri:images[1]}}/>
                            </View>
                            <View style={{flexDirection: 'row', flex: 1}}>
                                <Image style={[styles.img, {marginRight: 2}]} source={{uri:images[2]}}/>
                                <Image style={[styles.img, {marginLeft: 2, marginRight: 2}]} source={{uri:images[3]}}/>
                                <Image style={[styles.img, {marginLeft: 2}]} source={{uri:images[4]}}>
                                    <View style={{flex: 1, backgroundColor: 'rgba(0,0,0,.7)', justifyContent: 'center', alignItems: 'center'}}>
                                        <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
                                            + {imageCount - 5}
                                        </Text>
                                    </View>
                                </Image>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                );


        }
    }

    openImages() {
        const {images} = this.props;

        // this.props.navigator.push('images', {images});
    }

    render() {

        const {title, images} = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.textContainer}>
                    <Text style={styles.text}>{title}</Text>
                </View>
                {this.renderImages()}
            </View>
        )
    }
}

const styles = {

  container:{
    marginTop:10,
    padding:10,
  },
  imageContainer: {
      height: height/2.5,
  },
  img: {
      flex: 1,
      width: null,
      height: null
  },
  textContainer: {
      paddingTop: 0,
      paddingBottom: 8,
  },
  text: {
    color: '#ffffff'
  }
};
