import LabelListItem from "@/models/labelListItem";
import LocalStorage from "@/utils/LocalStoreage";
import app from "./app"
import Vue from "vue";
import Vuex from "vuex";
import Axios from 'axios';
import LabelTypeList from '@/models/labelTypeList';

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    labelTypeList: <LabelTypeList> {
      "default":  {
        title: "懒得分类",
        link: "/",
        icon: 'iconfont icon-morenyingyong',
        list: new LocalStorage("default").data || [],
      },
      "game": {
        title: "爱玩游戏",
        link: "game",
        icon: 'iconfont icon-game',
        list: new LocalStorage("game").data || [],
      },
      "study": {
        title: "我爱学习",
        link: "study",
        icon: 'iconfont icon-xinbaniconshangchuan-',
        list: new LocalStorage("study").data || [],
      },
      "photoReports": {
        title: "找找灵感",
        link: "photoReports",
        icon: 'iconfont icon-tupian',
        list: new LocalStorage("photoReports").data || [],
      },
    },
    // currentType: <keyof LabelTypeList> "default"
  },

  mutations: {
    addLabelListItem(state, labelItem: LabelListItem) {
      let key: keyof LabelTypeList = labelItem.type
      console.log("key",key)
      state.labelTypeList[key].list.push(labelItem);
      new LocalStorage(key).data = state.labelTypeList[key].list
    },
  },
  actions: {
    getLabelListItem({commit}){
      
    }
  },
  modules: {
    app
  },
});
