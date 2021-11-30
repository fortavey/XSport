import React from 'react'
import { StyleSheet, View } from 'react-native'
import { WebView } from 'react-native-webview'
import { StatusBar } from 'expo-status-bar'
import { Ionicons } from '@expo/vector-icons'
import THEME from '../data/color'
import DocsStore from '../store/DocsStore'

function DocsScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <StatusBar hidden={true} />
      <View style={styles.container}>
        <Ionicons
          name="ios-home-outline"
          size={35}
          color="white"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
      <WebView style={styles.container} source={{ uri: DocsStore.link }} />
    </View>
  )
}

export default DocsScreen

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
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
