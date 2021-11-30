import React from 'react'
import { observer } from 'mobx-react-lite'
import LangStore from '../store/LangStore'
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native'
import THEME from '../data/color'
import { AntDesign } from '@expo/vector-icons'

function HelpPopup({ closeHelpPopup, el }) {
  const popupClick = (e) => {
    e.stopPropagation()
  }

  return (
    <View style={styles.popupContainer}>
      <TouchableOpacity
        style={styles.popup}
        onPress={popupClick}
        activeOpacity={1}
      >
        <AntDesign
          name="closecircleo"
          style={styles.close}
          size={35}
          color="red"
          onPress={closeHelpPopup}
        />
        <Image style={styles.cardImage} source={el.img} />
        <Text style={styles.langItemText}>{el[LangStore.lang]}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  popupContainer: {
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.6)',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 5,
  },
  popup: {
    width: '80%',
    height: 400,
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    position: 'relative',
  },
  close: {
    position: 'absolute',
    top: 3,
    right: 3,
  },
  langItemText: {
    fontSize: 20,
    textAlign: 'center',
  },
})
export default observer(HelpPopup)
