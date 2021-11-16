import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import LangStore from '../store/LangStore'
import MainSore from '../store/MainSore'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import THEME from '../data/color'
import { StatusBar } from 'expo-status-bar'
import { FontAwesome } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import { Feather } from '@expo/vector-icons'
import LangPopup from '../components/LangPopup'

function HomeScreen({ navigation }) {
  const [showPopup, setShowPopup] = useState(false)
  const imageBg = require('../../assets/homeBg.png')

  const renderCategories = () => {
    const newArr = Object.entries(MainSore.data).map((cat) => (
      <TouchableOpacity
        style={styles.item}
        key={cat[1].id}
        onPress={() => navigation.navigate('Category', cat[1])}
      >
        <Text style={styles.itemText}>{cat[1].name[LangStore.lang]}</Text>
      </TouchableOpacity>
    ))
    return newArr
  }

  const openPopup = () => {
    setShowPopup(true)
  }
  const closePopup = () => {
    setShowPopup(false)
  }

  const translate = {
    title: {
      RU: 'Выбор категории',
      EN: 'Choose category',
    },
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" backgroundColor={THEME.MAIN_COLOR} />
      <ImageBackground
        source={imageBg}
        resizeMode="cover"
        style={styles.imageBg}
      >
        <Text style={styles.title}>{translate.title[LangStore.lang]}</Text>
        <View style={styles.catList}>{renderCategories()}</View>
      </ImageBackground>
      <View style={styles.navigation}>
        <TouchableOpacity style={styles.navItem} onPress={openPopup}>
          <FontAwesome name="language" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="ios-documents-outline" size={50} color="white" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Feather name="settings" size={50} color="white" />
        </TouchableOpacity>
      </View>
      {showPopup && <LangPopup closePopup={closePopup}></LangPopup>}
    </View>
  )
}

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
  title: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center',
  },
  catList: {
    alignItems: 'center',
    paddingTop: 40,
  },
  item: {
    height: 60,
    width: '80%',
    backgroundColor: THEME.LIGHT_MAIN_COLOR,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: '#fff',
    fontSize: 20,
    textTransform: 'uppercase',
  },
  navigation: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    paddingBottom: 50,
  },
})

export default observer(HomeScreen)
