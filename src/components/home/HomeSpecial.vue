<template>
  <PanelComponent main-title="最新专题">
    <template #right>
      <LookMore></LookMore>
    </template>
    <div class="main">
      <ul class="special__list-wrapper">
        <li class="special-item" v-for="i in 3" :key="i">
          <RouterLink to="/">
            <img
              src="https://zhoushugang.gitee.io/erabbit-client-pc-static/uploads/topic_goods_1.jpg"
              alt=""
            />
            <div class="meta">
              <p class="title">
                <span class="top ellipsis">看到撒娇的撒娇的凯撒就</span>
                <span class="sub ellipsis">倒萨倒萨倒萨</span>
              </p>
              <PriceIcon price="19.99"></PriceIcon>
            </div>
          </RouterLink>

          <div class="footer">
            <span class="like"><LikeIcon></LikeIcon>99</span>
            <span class="view"><SeeIcon></SeeIcon>99</span>
            <span class="reply"><MsgIcon></MsgIcon>99</span>
          </div>
        </li>
      </ul>
    </div>
  </PanelComponent>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
.special__list-wrapper {
  display: flex;
  justify-content: space-between;
  height: 38rem;
  .special-item {
    width: 40.4rem;
    position: relative;
    img {
      width: 100%;
      height: 28.8rem;
    }

    .meta {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 28.8rem;
      z-index: 1;
      .title {
        bottom: 0;
        left: 0;
      }
    }
  }
}
</style>
