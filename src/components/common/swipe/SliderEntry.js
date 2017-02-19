import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './index.style';
import ImagesGrid from '../ImagesGrid';

export default class SliderEntry extends Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        images: PropTypes.array,
        even: PropTypes.bool
    };

    render () {
        const { title, images, even } = this.props;
        const uppercaseTitle = title ? (
            <Text style={[styles.title]} numberOfLines={2}>{ title }</Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.slideInnerContainer}
              onPress={() => {}}
              >
              <View style={[styles.textContainer]}>
                  { uppercaseTitle }
              </View>
                <View style={[styles.imageContainer]}>
                    <ImagesGrid images={images} title={title} imageContainerHeight={this.props.imageContainerHeight} />
                    <View style={[styles.radiusMask]} />
                </View>

            </TouchableOpacity>
        );
    }
}
