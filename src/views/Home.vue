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
    display: flex;
    flex-direction: column;
    background-color: #263238;
    padding: 20px;
    overflow: auto;
    height: 100vh;
  }
}
</style>
