import React from 'react'
import { observer } from 'mobx-react-lite'
import LangStore from '../store/LangStore'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import THEME from '../data/color'

function LangPopup({ closePopup }) {
  const popupClick = (e) => {
    e.stopPropagation()
  }

  const changeLang = (lang) => {
    LangStore.change(lang)
    closePopup()
  }

  return (
    <TouchableOpacity style={styles.popupContainer} onPress={closePopup}>
      <TouchableOpacity
        style={styles.popup}
        onPress={popupClick}
        activeOpacity={1}
      >
        <TouchableOpacity
          style={styles.langItem}
          onPress={() => changeLang('RU')}
        >
          <Text style={styles.langItemText}>RU</Text>
          <Image style={styles.flag} source={require('../../assets/RU.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.langItem}
          onPress={() => changeLang('EN')}
        >
          <Text style={styles.langItemText}>EN</Text>
          <Image style={styles.flag} source={require('../../assets/EN.png')} />
        </TouchableOpacity>
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  popupContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.8)',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  popup: {
    width: '80%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  langItemText: {
    fontSize: 20,
    textAlign: 'center',
  },
  flag: {
    borderWidth: 1,
    borderColor: THEME.MAIN_COLOR,
  },
})
export default observer(LangPopup)
