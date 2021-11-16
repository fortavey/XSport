import { makeObservable, action, observable, computed, runInAction } from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage'

class LangStore {
  language = 'RU'
  data = []

  change = (val) => {
    this.language = val
    AsyncStorage.setItem('@lang', val)
  }

  get lang() {
    return this.language
  }

  constructor() {
    makeObservable(this, {
      language: observable,
      lang: computed,
      change: action,
    })
  }
}

export default new LangStore()
