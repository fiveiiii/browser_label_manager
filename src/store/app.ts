import LocalStorage from "@/utils/LocalStoreage";

const state = {
  sidebar: {
    open:<boolean> new LocalStorage('sidebarStatus').data || false
  }
}
const mutations = {
  TOGGLE_SIDEBAR(state:any){
    state.sidebar.open = !state.sidebar.open;
    new LocalStorage('sidebarStatus').data = state.sidebar.open
  }
}
const actions = {

}
export default {
  namespaced: true,
  state,
  mutations,
  actions
}