import React, { useState } from 'react'
import { observer } from 'mobx-react-lite'
import LangStore from '../store/LangStore'
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from 'react-native'
import THEME from '../data/color'
import { StatusBar } from 'expo-status-bar'
import HeaderLine from '../components/HeaderLine'

function CategoryScreen({ route, navigation }) {
  const obj = route.params

  let imageBg = require('../../assets/catBg.png')

  switch (obj.name.EN) {
    case 'football':
      imageBg = require('../../assets/catBg.png')
      break
    case 'basketball':
      imageBg = require('../../assets/basketball.png')
      break
  }

  const renderCategories = () => {
    const newArr = obj.categories.map((cat, idx) => (
      <TouchableOpacity
        style={styles.item}
        key={idx}
        onPress={() => navigation.navigate('Card', cat.list)}
      >
        <Text style={styles.itemText}>{cat.name[LangStore.lang]}</Text>
      </TouchableOpacity>
    ))

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
        <View style={styles.catList}>{renderCategories()}</View>
      </ImageBackground>
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
    paddingTop: 30,
  },
  catList: {
    flex: 1,
    paddingTop: 50,
    marginRight: 10,
    marginLeft: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  item: {
    height: 100,
    width: '48%',
    backgroundColor: 'rgba(1,122,205,0.4)',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  itemLast: {
    width: '100%',
  },
  itemText: {
    color: '#fff',
    fontSize: 22,
    textTransform: 'uppercase',
    textAlign: 'center',
  },
})

export default observer(CategoryScreen)
