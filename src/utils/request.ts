import Axios, { AxiosInstance } from "axios";
export default class HttpRequest {
  httpRequest: AxiosInstance;
  constructor() {
    this.httpRequest = Axios.create({
      baseURL: "http://127.0.0.1:7001",
      timeout: 15000,
    });
    this.httpRequest.interceptors.request.use(
      (config) => {
        console.log("请求时:", config);
        return config;
      },
      (err) => {
        console.log("请求时出错:", err);
        return Promise.reject(err);
      }
    );
    this.httpRequest.interceptors.response.use(
      (config) => {
        console.log("响应:", config);
        return config;
      },
      (err) => {
        console.log("响应出错", err);
        return Promise.reject(err);
      }
    );
  }
  async get(url: string): Promise<any> {
    let result: any = {};
    await this.httpRequest
      .get(url)
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        result = err;
      });
    return result;
  }

  async post(url: string, data: object): Promise<any> {
    let result: any = {};
    await this.httpRequest
      .post(url, data)
      .then((res) => {
        result = res.data;
      })
      .catch((err) => {
        console.log("Err", err);
        result = err;
      });
    return result;
  }
}
