<template>
  <el-col :span="24"
    ><div class="nav-header">
      <span>{{ headText }}</span>
    </div></el-col
  >
</template>

<script lang="ts">
export default {
  created() {},
  data() {
    return {};
  },
  computed: {
    headText() {
      return "学而不思则罔,思而不学则殆";
    },
  },
};
</script>

<style lang="scss">
@media screen and (max-width: 768px) {
  .nav-header {
    span {
      font-size: 1.1rem;
    }
  }
}
@media screen and (min-width: 768px) {
  .nav-header {
    span {
      font-size: 20px;
    }
  }
}

@keyframes head {
  0% {
    letter-spacing: 1em;
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
}
.nav-header {
  height: 5vh;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  // background-color: #263238;
  box-sizing: border-box;
  overflow: hidden;
  span {
    letter-spacing: 1px;
    animation: head 1s ease 1;
    font-weight: bold;
    color: #ffea00;
  }
}
</style>
