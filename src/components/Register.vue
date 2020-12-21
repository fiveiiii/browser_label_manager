<template>
  <div class="register-form">
    <el-dialog @click="dialogFormVisible = false" :visible.sync="dialogFormVisible">
      <div
        v-loading="commitUnderway"
        element-loading-text="正在提交"
        element-loading-spinner="el-icon-loading"
        element-loading-background="rgba(38, 50, 56, .5)"
        style="display: flex; flex-direction: column"
      >
        <el-form :model="formData" :rules="rules" ref="ruleForm" label-width="80px">
          <el-form-item label="冲浪名称" prop="userName">
            <el-input v-model="formData.userName"></el-input>
          </el-form-item>
          <el-form-item label="冲浪密码" prop="passWord">
            <el-input v-model="formData.passWord"></el-input>
          </el-form-item>
        </el-form>
        <div class="login-btn" @click="() => {}">登录</div>
      </div>
    </el-dialog>

    <el-button @click="dialogFormVisible = true" icon="el-icon-s-custom">
      登录
    </el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import RegisterFormData from "@/models/registerFormData";
@Component({})
export default class Register extends Vue {
  private formData: RegisterFormData = { userName: "", password: "" };
  private dialogFormVisible: boolean = false;
  private commitUnderway: boolean = false;
  private rules = {
    userName: [
      {
        required: true,
        message: "请输入用户名",
        trigger: "blur",
      },
    ],
    passWord: [
      {
        required: true,
        message: "请输入密码",
        trigger: "blur",
      },
      {
        min: 6,
        max: 18,
        messgae: "长度在 6 到 18 个字符之间",
      },
    ],
  };
}
</script>

<style lang="scss">
.register-form {
  .login-btn {
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
  .el-button {
    position: absolute;
    top: 2vh;
    right: 5vh;
    z-index: 2;
    background-color: #263238;
    color: #ffea00;
    width: 6%;
  }
}
</style>
