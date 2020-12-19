<template>
  <div class="study">
    <LabelList :list="labelList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"; // @ is an alias to /src
import LabelListItem from "@/models/labelListItem";
import LabelList from "@/components/LabelList.vue";
@Component({
  components: {
    LabelList,
  },
})
export default class Study extends Vue {
  private labelList: Array<LabelListItem> =
    this.$store.state.labelTypeList.study.list || [];
  created() {}
}
</script>
<style lang="scss">
.study {
}
</style>
