<template>
  <div class="default-wrap">
    <LabelList :list="labelList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import LocalStorage from "@/utils/LocalStoreage";
import LabelList from "@/components/LabelList.vue";
import LabelListItem from "@/models/labelListItem";
@Component({
  components: {
    LabelList,
  },
})
export default class Default extends Vue {
  private labelList: Array<LabelListItem> =
    this.$store.state.labelTypeList.default.list || [];
  created() {
    this.labelList;
  }
}
</script>
<style lang="scss" scoped>
.default-wrap {
}
</style>
