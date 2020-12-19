import Axios from "axios";
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
