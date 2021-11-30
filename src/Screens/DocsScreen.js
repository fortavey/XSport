import React, { useState } from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import THEME from '../data/color'
import DocsStore from '../store/DocsStore'
import LangStore from '../store/LangStore'

function DocsScreen({ navigation }) {
  let [showLoader, setShowLoader] = useState(true)

  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      {showLoader && (
        <View style={styles.loaderView}>
          <Image
            style={styles.loaderImg}
            source={require('../../assets/loader.gif')}
          />
        </View>
      )}
      {!LangStore.show && (
        <View style={styles.container}>
          <Ionicons
            name="ios-home-outline"
            size={35}
            color="white"
            onPress={() => navigation.push('Home')}
          />
        </View>
      )}
      <WebView
        style={styles.container}
        source={{ uri: DocsStore.link }}
        onLoad={(syntheticEvent) => setShowLoader(false)}
      />
    </View>
  )
}

export default DocsScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: 'relative',
  },
  loaderView: {
    position: 'absolute',
    flex: 1,
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loaderImg: {
    width: 100,
    height: 100,
  },
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: THEME.MAIN_COLOR,
  },
})
