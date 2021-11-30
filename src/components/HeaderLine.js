import React from 'react'
import { observer } from 'mobx-react-lite'
import LangStore from '../store/LangStore'
import { Ionicons } from '@expo/vector-icons'
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Platform,
} from 'react-native'

function HeaderLine({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.push('Home')}>
        <Ionicons name="ios-home-outline" size={35} color="white" />
      </TouchableOpacity>
      <View style={styles.langContainer}>
        <TouchableOpacity
          style={styles.langItem}
          onPress={() => LangStore.change('RU')}
        >
          <Image style={styles.flag} source={require('../../assets/RU.png')} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.langItem}
          onPress={() => LangStore.change('EN')}
        >
          <Image style={styles.flag} source={require('../../assets/EN.png')} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginRight: 10,
    marginLeft: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  langContainer: {
    flexDirection: 'row',
    width: '25%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  langItem: {
    width: '35%',
  },
  flag: {
    width: '100%',
    height: Platform.OS === 'ios' ? 30 : 20,
  },
})

export default observer(HeaderLine)
