<template>
  <div class="add-label-list-item-wrap">
    <el-dialog @click="dialogFormVisible = false" :visible.sync="dialogFormVisible">
      <div
        v-loading="commitUnderway"
        element-loading-text="正在提交"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(38, 50, 56, .5)"
        style="display: flex; flex-direction: column"
      >
        <el-form :model="labelItem" :rules="rules" label-width="80">
          <el-form-item label="网站分类">
            <el-select
              style="margin-bottom: 22px; width: 100%"
              v-model="labelItem.type"
              placeholder="请选择网站类别"
            >
              <el-option
                v-for="(item, key, index) in $store.state.labelTypeList"
                :key="index"
                :label="item.title"
                :value="key"
              >
              </el-option>
            </el-select>
          </el-form-item>
          <el-form-item prop="link" label="网站链接">
            <el-input
              @keydown.enter.native="addItem"
              v-model="labelItem.link"
              placeholder="http://www.baidu.com/"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="add-btn" @click="addItem">添加网站</div>
      </div>
    </el-dialog>
    <div @click="dialogFormVisible = true" class="float-btn">
      <i class="el-icon-plus"></i>
    </div>
  </div>
</template>
<script lang="ts">
import LocalStorage from "@/utils/LocalStoreage";
import LabelListItem from "@/models/labelListItem";
import { Component, Vue } from "vue-property-decorator";
import HttpRequest from "@/utils/request";
@Component
export default class AddLabelListItem extends Vue {
  private dialogFormVisible: boolean = false;
  private inputValue: string = "";
  private commitUnderway: boolean = false;
  private labelItem: LabelListItem = {
    title: "",
    icon: "",
    link: "",
    type: "default",
    desc: "",
  };
  private rules: object = {
    link: [{ required: true, message: "请输入网站链接", trigger: "blur" }],
  };
  private matcht: RegExp = /^(https?:\/\/)([0-9a-z.]+)?([a-z]{2,6})?(:[0-9]+)?(\?[0-9a-z&=]+)?/i;

  private checkLinkWithTheRule(label: any): void {
    let url: any = this.matcht.exec(label["link"]);
    console.log(url);
    if (!url) {
      this.$message({
        type: "error",
        message: "链接不符合规则,请检查!",
      });
      this.commitUnderway = false;
      throw `${label["link"]} Does not meet the rules`;
    } else {
      label["link"] = url[0];
    }
  }
  private labelIsExisting(list: Array<LabelListItem>): void {
    for (let i = 0; i < list.length; i++) {
      const elem = list[i];
      if (elem.link === this.labelItem.link) {
        this.$message.error("该网站已经存在");
        throw "link is existing";
      }
    }
  }

  private async addItem(): Promise<void> {
    if (this.commitUnderway) return;
    this.commitUnderway = true;
    this.checkLinkWithTheRule(this.labelItem); // 检测网址是否合规
    let res = await new HttpRequest().post("/addLabelItem", {
      link: this.labelItem.link,
    });
    this.commitUnderway = false;
    if (res.code === 0) {
      let nItem: LabelListItem = Object.assign(this.labelItem, res.data);
      this.labelIsExisting(this.$store.state.labelTypeList[nItem.type].list); //检测是否包含该网站

      this.commitToLocalState(this.labelItem);
      this.dialogFormVisible = false;
    } else {
      console.log("res===>>", res);
      this.$message.error(`${res.msg || res}`);
    }
  }

  private commitToLocalState(formData: LabelListItem): void {
    this.$store.commit("addLabelListItem", formData);
    this.$message("标签添加成功");
    this.labelItem = {
      title: "",
      link: "",
      icon: "",
      type: "default",
      desc: "",
    };
    this.dialogFormVisible = false;
  }
}
</script>

<style lang="scss">
.add-label-list-item-wrap {
  .el-dialog {
    background-color: #263238;
  }
  .el-form-item__label {
    color: #fff59d;
  }
  .el-dialog__title {
    font-weight: bold;
  }
  .add-btn {
    background-color: #d500f9;
    border-radius: 4px;
    color: #ffea00;
    text-shadow: 0px 0px 1px #ffea00;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: bold;
    cursor: pointer;
  }
  .float-btn {
    position: absolute;
    z-index: 3;
    bottom: 5vh;
    right: 5vh;
    height: 5vh;
    width: 5vh;
    background-color: #d500f9;
    border-radius: 50%;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 10px #d500f9;
    font-size: 30px;
    color: #fff59d;
    font-weight: bold;
    transition: all 0.3s linear;
  }
  .float-btn:hover {
    cursor: pointer;
  }
}
</style>
