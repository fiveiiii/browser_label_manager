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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(10px);
  transition: all;
  opacity: 0;
}
.main-wrap {
  display: flex;
  flex-direction: column;

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
