<template>
  <div class="games">
    <LabelList :list="labelList" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator"; // @ is an alias to /src
import LocalStorage from "@/utils/LocalStoreage";
import LabelListItem from "@/models/labelListItem";
import LabelList from "@/components/LabelList.vue";
@Component({
  components: {
    LabelList,
  },
})
export default class Games extends Vue {
  private labelList: Array<LabelListItem> =
    this.$store.state.labelTypeList.game.list || [];
  created() {
    this.labelList;
  }
}
</script>
<style lang="scss" scoped>
.games {
}
</style>
