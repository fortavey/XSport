import LangStore from '../store/LangStore'
import AsyncStorage from '@react-native-async-storage/async-storage'

async function getLang() {
  try {
    const value = await AsyncStorage.getItem('@lang')
    if (value !== null) {
      LangStore.change(value)
    } else {
      await AsyncStorage.setItem('@lang', 'RU')
    }
  } catch (e) {
    console.log(e)
  }
}

export default getLang
