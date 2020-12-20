<template>
  <div class="label-list">
    <div
      @click="() => newTabOpenLink(item.link)"
      class="label-item"
      v-for="(item, index) in list"
      :key="index"
    >
      <div class="item-container">
        <div class="item-head">
          <div class="icon">
            <img :src="item.icon" alt="" />
          </div>
          <div class="title">
            <span>{{ item.title }}</span>
          </div>
        </div>
        <span class="item-desc">{{ item.desc }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import LabelListItem from "@/models/labelListItem";
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class LabelList extends Vue {
  @Prop()
  list?: Array<LabelListItem>;
  private elem = document.getElementsByClassName("label-item");
  private newTabOpenLink(link: string): void {
    console.log("link", link);
    window.open(link);
  }
  created() {}
}
</script>

<style lang="scss">
@media screen and (max-width: 768px) {
  .label-list {
    flex-direction: column;
    .label-item {
      width: 100%;
      .title {
        font-size: 1rem;
      }
      .item-desc {
        font-size: 0.5rem;
      }
    }
  }
}

@media screen and (min-width: 780px) {
  .label-list {
    flex-wrap: wrap;
    .label-item {
      width: 25%;
      .title {
        font-size: 18px;
      }
      .item-desc {
        font-size: 12px;
      }
    }
  }
}

.label-list {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: start;
  margin-right: -20px;
  overflow: auto;
  padding-top: 20px;

  .label-item {
    box-sizing: border-box;
    padding-right: 20px;
    margin-bottom: 24px;
    transition: all 0.35s;
    .item-container {
      box-sizing: border-box;
      background-color: #ffea00;
      padding: 10px;
      color: #d500f9;
      font-weight: bold;
      border-radius: 4px;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .item-head {
        display: flex;
        align-items: center;
        .title {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
          // text-shadow: 0px 1px 1px #263238;
        }
        .icon {
          border-radius: 50%;
          width: 35px;
          height: 35px;
          margin-right: 22px;
          img {
            height: 100%;
          }
        }
      }
      .item-desc {
        color: #263238;
        font-weight: bold;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        // text-shadow: 0px 1px 1px ;
      }
    }
  }
  .label-item:hover {
    cursor: pointer;
    transition: all 0.35s;
    transform: translate(0px, -10px);
    .item-container {
      box-shadow: 0 1px 10px #ffff8d;
      border: 1px solid #18ffff;
      background-color: #ffee58;
    }
  }
}
</style>
