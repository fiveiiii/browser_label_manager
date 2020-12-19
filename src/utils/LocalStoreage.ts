export default class LocalStorage {
  key: any;
  constructor(props: any) {
    this.key = props;
  }
  get data(): any {
    return JSON.parse(`${localStorage.getItem(this.key)}`);
  }
  set data(data: any) {
    localStorage.setItem(this.key, JSON.stringify(data));
  }
  static clear(): void {
    localStorage.clear()
  }
}
