import React, {Component} from 'react';
import {
    View,
    Dimensions,
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Image,
} from 'react-native';

const no_image = require('./noimage.jpg')

const {width, height} = Dimensions.get('window');

export default class ImagesGrid extends Component {


    renderImages() {
        const { images, imageContainerHeight } = this.props;

        if(!images){
          return null;
        }
        const imageContainerStyles = { height: imageContainerHeight ? height/imageContainerHeight : height/2.5};

        const imageCount = images.length;
        switch(imageCount) {
            case 0:
                return (
                    <View style={imageContainerStyles}>
                        <Image style={styles.img} source={ no_image } />
                    </View>
                );
            break;
            //1 image
            case 1:
                return (
                    <View style={imageContainerStyles}>
                        <Image style={styles.img} source={{uri:images[0]}}/>
                    </View>
                );
                break;

            case 2:
                return(
                    <TouchableWithoutFeedback onPress={this.openImages.bind(this)}>
                        <View style={imageContainerStyles}>
                            <Image style={[styles.img, {marginBottom: 4}]} source={{uri:images[0]}}/>
                            <Image style={styles.img} source={{uri:images[1]}}/>
                        </View>
                    </TouchableWithoutFeedback>
                );
                break;
            case 3:
                return(
                    <TouchableWithoutFeedback onPress={this.openImages.bind(this)}>
                        <View style={imageContainerStyles}>
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
                        <View style={imageContainerStyles}>
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
                        <View style={imageContainerStyles}>
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
                        <View style={imageContainerStyles}>
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
                {this.renderImages()}
            </View>
        )
    }
}

const styles = {

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
    color: '#797d7e'
  }
};
