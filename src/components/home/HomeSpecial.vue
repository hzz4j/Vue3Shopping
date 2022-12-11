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
              <PriceIcon class="price" price="19.99"></PriceIcon>
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
      background: linear-gradient(to top, rgba(255, 253, 253, 0.8));
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 28.8rem;
      z-index: 1;
      .title {
        position: absolute;
        left: 0;
        bottom: 0;
        padding-left: 1.6rem;
        width: 70%;
        height: 7rem;
        span {
          display: block;
          &.top {
            color: #fff;
            font-size: 2.2rem;
          }
          &.sub {
            color: #999;
            font-size: 1.9rem;
          }
        }
      }

      .price {
        position: absolute;
        bottom: 2.5rem;
        right: 1.6rem;
        background-color: #fff;
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
      }
    }

    .footer {
      height: 7.2rem;
      line-height: 7.2rem;
      font-size: 1.6rem;
      padding: 0 2rem;

      .icon {
        :deep(.iconfont) {
          font-size: 2rem;
          margin-right: 0.5rem;
          vertical-align: middle;
        }
      }

      .like,
      .view {
        float: left;
        margin-right: 2rem;
        @extend .icon;
      }

      .reply {
        float: right;
        @extend .icon;
      }
    }
  }
}
</style>
