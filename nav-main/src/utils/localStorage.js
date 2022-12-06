export default class Storage {
  constructor(prefix) {
    this.prefix = prefix ? `${prefix}_` : ''
  }

  get(key) {
    if (localStorage.getItem(this.prefix + key) !== null) {
      return Json.parse(localStorage.getItem(this.prefix + key))
    } else {
      return null
    }
  }

  set (key, value) {
    localStorage.setItem(this.prefix + key, value)
  }

  remvoe(key) {
    localStorage.removeItem(this.prefix + key)
  }

  clear() {
    localStorage.clear
  }
}