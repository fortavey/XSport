import { makeObservable, observable, computed } from 'mobx'

class DocsStore {
  url = `https://bretool.ru/privacy-policy-en.php`

  get link() {
    return this.url
  }

  constructor() {
    makeObservable(this, {
      url: observable,
      link: computed,
    })
  }
}

export default new DocsStore()
