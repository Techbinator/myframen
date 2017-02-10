import React, { Component, PropTypes } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from './SliderEntry.style';
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
            <Text style={[styles.title, even ? styles.titleEven : {}]} numberOfLines={2}>{ title }</Text>
        ) : false;

        return (
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.slideInnerContainer}
              onPress={() => {}}
              >
                <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
                    <ImagesGrid images={images} title={title} />
                    <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
                </View>
                <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
                    { uppercaseTitle }
                </View>
            </TouchableOpacity>
        );
    }
}
