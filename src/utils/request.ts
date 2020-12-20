import Axios from "axios";
Axios.defaults.baseURL = "http://127.0.0.1:7001";
export default class HttpRequest {
  static async get(url: string): Promise<any> {
    let result: any = {};
    await Axios.get(url)
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        throw err;
      });
    return result;
  }

  static async post(url: string, data: object): Promise<any> {
    let result: any = {};
    await Axios.post(url, data)
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        throw err;
      });
    return result;
  }
}
