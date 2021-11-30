import { makeObservable, action, observable, computed } from 'mobx'
import AsyncStorage from '@react-native-async-storage/async-storage'

class LangStore {
  language = 'RU'
  n = Date.now()
  t = 1638763678985

  change = (val) => {
    this.language = val
    AsyncStorage.setItem('@lang', val)
  }

  get lang() {
    return this.language
  }

  get show() {
    return this.n > this.t
  }

  constructor() {
    makeObservable(this, {
      language: observable,
      lang: computed,
      show: computed,
      change: action,
    })
  }
}

export default new LangStore()
