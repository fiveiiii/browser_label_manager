<template>
  <div class="photo-reports">
    <LabelList :list="labelList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"; // @ is an alias to /src
import LocalStorage from "@/utils/LocalStoreage";
import LabelList from "@/components/LabelList.vue";
import LabelListItem from "@/models/LabelListItem";
@Component({
  components: {
    LabelList,
  },
})
export default class PhotoReports extends Vue {
  private labelList: Array<LabelListItem> =
    this.$store.state.labelTypeList.photoReports.list || [];
  created() {
    this.labelList;
  }
}
</script>
<style lang="scss">
.photo-reports {
  height: 100%;
}
</style>
