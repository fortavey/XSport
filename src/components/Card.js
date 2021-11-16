import React, { useEffect, useState } from 'react'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native'
import FlipCard from 'react-native-flip-card'

function Card({ el, idx, flip, changeCardFlip }) {
  return (
    <TouchableOpacity
      style={styles.cardItem}
      onPress={() => changeCardFlip(idx)}
    >
      <FlipCard
        flipVertical={false}
        flipHorizontal={true}
        flip={flip}
        clickable={false}
      >
        <View style={styles.face}>
          <Image style={styles.cardImage} source={el.img} />
        </View>
        <View style={styles.back}>
          <Image
            style={styles.cardImage}
            source={require('../../assets/backSide.png')}
          />
        </View>
      </FlipCard>
    </TouchableOpacity>
  )
}

const width = Dimensions.get('window').width
const imageSize = (width - 40) / 3

const styles = StyleSheet.create({
  cardItem: {
    width: imageSize,
    height: imageSize,
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: '100%',
  },
})

export default Card
