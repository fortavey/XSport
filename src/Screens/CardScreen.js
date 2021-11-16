import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import LangStore from '../store/LangStore'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native'
import THEME from '../data/color'
import { StatusBar } from 'expo-status-bar'
import HeaderLine from '../components/HeaderLine'
import Card from '../components/Card'

function CardScreen({ route, navigation }) {
  const obj = route.params
  const [cards, setCards] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])
  const num = 4

  useEffect(() => {
    const newArr = [...cards].map((el) => true)
    setTimeout(() => setCards(newArr), 2000)
  }, [])

  const changeCardFlip = (id) => {
    const newArr = [...cards].map((el, i) => i !== id)
    setCards(newArr)
  }

  useEffect(() => {
    const timeoutID = cards[num]
      ? setTimeout(() => setCards([...cards].map((el) => true)), 1000)
      : null
    return () => {
      clearTimeout(timeoutID)
    }
  }, [cards])

  const imageBg = require('../../assets/catBg.png')

  const render = () => {
    const newArr = obj.list.map(
      (el, idx) =>
        idx < 12 && (
          <Card
            key={idx}
            el={el}
            idx={idx}
            flip={cards[idx]}
            changeCardFlip={changeCardFlip}
          />
        )
    )
    return newArr
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={THEME.MAIN_COLOR} />
      <ImageBackground
        source={imageBg}
        resizeMode="cover"
        style={styles.imageBg}
      >
        <HeaderLine navigation={navigation} />
        <View style={styles.cardContainer}>{render()}</View>
      </ImageBackground>
    </View>
  )
}

const width = Dimensions.get('window').width
const imageSize = (width - 40) / 3

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: THEME.MAIN_COLOR,
    position: 'relative',
  },
  imageBg: {
    flex: 1,
    width: '100%',
    paddingTop: 50,
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 10,
  },
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

export default observer(CardScreen)
