export default class Storage {
  prefix
  constructor(prefix?: string) {
    this.prefix = prefix ? `${prefix}_` : ''
  }

  get(key: string) {
    let res = localStorage.getItem(this.prefix + key)
    if (res !== null) {
      return JSON.parse(res)
    } else {
      return null
    }
  }

  set(key: string, value: any) {
    localStorage.setItem(this.prefix + key, value)
  }

  remvoe(key: string) {
    localStorage.removeItem(this.prefix + key)
  }

  clear() {
    localStorage.clear
  }
}
