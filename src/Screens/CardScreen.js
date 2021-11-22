import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import LangStore from '../store/LangStore'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native'
import THEME from '../data/color'
import { StatusBar } from 'expo-status-bar'
import HeaderLine from '../components/HeaderLine'
import Card from '../components/Card'
import HelpPopup from '../components/HelpPopup'

const falseArr = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0].map((el) => Boolean(el))

function CardScreen({ route, navigation }) {
  const [obj, setObj] = useState(
    [...route.params].sort(() => Math.random() - 0.5)
  )
  const [cards, setCards] = useState(falseArr)
  let [isEnd, setIsEnd] = useState(false)
  const [num, setNum] = useState(Math.floor(Math.random() * (12 - 0)) + 0)
  const [showPopup, setShowPopup] = useState(false)

  const texts = {
    helpText: {
      RU: 'Подсказка',
      EN: 'Help',
    },
    findText: {
      RU: 'Найди',
      EN: 'Find',
    },
    playAgain: {
      RU: 'Сыграть еще раз',
      EN: 'Play again',
    },
  }

  const openPopup = () => {
    setShowPopup(true)
  }
  const closeHelpPopup = () => {
    setShowPopup(false)
  }

  const changeCardFlip = (id) => {
    changeEnd(id)
    const newArr = [...cards].map((el, i) => i !== id)
    setCards(newArr)
  }

  const changeEnd = (id) => {
    id === num && setIsEnd(true)
  }

  useEffect(() => {
    const newArr = [...cards].map((el) => true)
    const timeoutID = setTimeout(() => {
      setCards(newArr)
      clearTimeout(timeoutID)
    }, 2000)
    return () => clearTimeout(timeoutID)
  }, [])

  const imageBg = require('../../assets/catBg.png')

  const render = () => {
    const newArr = obj.map(
      (el, idx) =>
        idx < 12 && (
          <Card
            key={idx}
            el={el}
            idx={idx}
            flip={cards[idx]}
            changeCardFlip={changeCardFlip}
            isEnd={isEnd}
          />
        )
    )
    return newArr
  }

  return (
    <View style={styles.container}>
      {showPopup && (
        <HelpPopup closeHelpPopup={closeHelpPopup} el={obj[num]}></HelpPopup>
      )}
      <StatusBar hidden={true} />
      <ImageBackground
        source={imageBg}
        resizeMode="cover"
        style={styles.imageBg}
      >
        <HeaderLine navigation={navigation} />
        <View style={styles.question}>
          <Text style={styles.questionText}>
            {texts.findText[LangStore.lang]}: {obj[num][LangStore.lang]}
          </Text>
        </View>
        <View style={styles.cardContainer}>{render()}</View>
        {isEnd ? (
          <TouchableOpacity
            style={styles.victoryButton}
            onPress={() => navigation.replace('Card', obj)}
          >
            <Text style={styles.victoryText}>
              {texts.playAgain[LangStore.lang]}
            </Text>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity style={styles.victoryButton} onPress={openPopup}>
            <Text style={styles.victoryText}>
              {texts.helpText[LangStore.lang]}
            </Text>
          </TouchableOpacity>
        )}
      </ImageBackground>
    </View>
  )
}

const width = Dimensions.get('window').width
const imageSize = (width - 40) / 3

const styles = StyleSheet.create({
  container: {
    position: 'relative',
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
    paddingTop: 30,
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
  victoryButton: {
    width: '70%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 'auto',
    marginLeft: 'auto',
    marginTop: 'auto',
    marginBottom: 20,
    backgroundColor: THEME.LIGHT_MAIN_COLOR,
  },
  victoryText: {
    color: '#fff',
  },
  question: {
    height: 40,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  questionText: {
    color: '#fff',
    fontSize: 18,
  },
})

export default observer(CardScreen)
