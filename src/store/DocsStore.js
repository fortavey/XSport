import { makeObservable, action, observable, computed } from 'mobx'
import LangStore from './LangStore'

class DocsStore {
  url = `https://bretool.ru/privacy-policy-en.php`

  change = (val) => {
    this.url = val
  }

  get link() {
    return this.url
  }

  constructor() {
    makeObservable(this, {
      url: observable,
      link: computed,
      change: action,
    })
  }
}

export default new DocsStore()
