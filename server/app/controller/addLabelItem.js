"use strict";

const Controller = require("egg").Controller;
const Axios = require("axios");
const Cheerio = require("cheerio");
class AddLabelItem extends Controller {
  async addLabelItem() {
    const { ctx } = this;
    const param = { ...ctx.request.body };
    let isError = false;
    let $,
      url = param.link;
    let res = await crawlData(url);

    if (res.name === "Error") {
      ctx.body = {
        code: 1,
        msg: "请检查链接是否正确",
        data: res
      };
    } else {
      $ = Cheerio.load(res, {
        decodeEntities: false,
      });
      ctx.body = {
        code: 0,
        msg: "ok",
        data: {
          err: res,
          desc: $('meta[name="description"]').attr("content"),
          icon: $('link[rel="icon"]').attr("href") || url + "/favicon.ico",
          title: $("title").text(),
        },
      };
    }

    async function crawlData(url = "") {
      let result;
      await Axios.default
        .get(url)
        .then((res) => {
          result = res.data;
        })
        .catch((err) => {
          isError = true;
          result = err;
        });
      return result;
    }
  }
}

module.exports = AddLabelItem;
