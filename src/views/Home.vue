<template>
  <el-container class="main-wrap">
    <Sidebar />
    <el-container class="main">
      <NavHeader />
      <router-view />
    </el-container>
    <AddLabelListItem />
  </el-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"; // @ is an alias to /src
import NavHeader from "@/components/NavHeader.vue";
import Sidebar from "@/components/Sidebar.vue";
import AddLabelListItem from "@/components/AddLabellListItem.vue";
@Component({
  components: {
    NavHeader,
    Sidebar,
    AddLabelListItem,
  },
})
export default class Home extends Vue {}
</script>
<style lang="scss">
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.main-wrap {
  .main {
    position: relative;
    display: flex;
    z-index: 1;
    background-image: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608397430048&di=bb55ff372b7e30944e9937e881249f33&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Farchive%2F008ccbd15387eeec309f1bed4f1c1353ed6a3757.jpg");
    flex-direction: column;
    padding: 20px;
    overflow: auto;
    height: 100vh;
  }
  .main:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    background: inherit;
    filter: blur(6px);
    z-index: -1;
  }
}
</style>
