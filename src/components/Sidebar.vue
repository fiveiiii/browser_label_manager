<template>
  <div class="sider-wrap">
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      :collapse="$store.state.app.sidebar.open"
      :router="true"
      text-color="#263238"
      active-text-color="#d500f9"
      background-color="#ffea00"
      :collapse-transition="true"
      mode="vertical"
    >
      <img
        @click="toggleSidebar"
        src="https://s3.ax1x.com/2020/12/16/rlHkAs.png"
        alt=""
      />
      <el-menu-item
        @click="() => changeActive(item.link)"
        v-for="(item, index) in labelTypeList"
        :key="index"
        :index="item.link"
      >
        <i :class="item.icon"></i>
        <span style="margin-left: 22px">{{ item.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script lang="ts">
import LabelListItem from "@/models/LabelListItem";
import LocalStorage from "@/utils/LocalStoreage";
import { Component, Emit, Vue } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  private active: any = new LocalStorage("active").data || "/";
  private labelTypeList: Array<LabelListItem> = this.$store.state.labelTypeList;
  private isCollapse: boolean = false;
  created() {
    console.log(this.$store);
  }
  beforeCreate() {}

  private toggleSidebar(): void {
    this.$store.commit("app/TOGGLE_SIDEBAR");
  }

  private changeActive(link: string): void {
    new LocalStorage("active").data = link;
    console.log(new LocalStorage("active").data);
  }
}
</script>

<style lang="scss">
.sider-wrap {
  position: relative;
  z-index: 2;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-menu {
    border: none;
    i {
      font-size: 24px;
      font-weight: bold;
    }
    img {
      width: 100%;
    }
    img:hover {
      cursor: pointer;
    }
    span {
      font-size: 18px;
      font-weight: bold;
    }
  }
  .el-menu-vertical-demo {
    height: 100vh;
    overflow: hidden;
  }
}
</style>
