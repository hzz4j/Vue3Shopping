<template>
  <div class="products-section" ref="target">
    <PanelComponent
      v-for="product in Products"
      :main-title="product.name"
      :key="product.id"
    >
      <template #right>
        <div class="sub-links">
          <RouterLink
            to="/"
            v-for="children in product.children"
            :key="children.id"
            >{{ children.name }}</RouterLink
          >
        </div>
        <LookMore></LookMore>
      </template>

      <section class="content-wrapper">
        <RouterLink class="cover" to="/">
          <img :src="product.picture" :alt="product.name" />
          <strong class="label">
            <span>{{ product.name }}馆</span>
            <span>{{ product.saleInfo }}</span>
          </strong>
        </RouterLink>
        <ul class="goods__list-wrapper">
          <li class="goods" v-for="goods in product.goods" :key="goods.id">
            <HomeGoods :goods="goods"></HomeGoods>
          </li>
        </ul>
      </section>
    </PanelComponent>
  </div>
</template>
<script lang="ts" setup>
import HomeGoods from "@/components/home/product/HomeGoods.vue"
import { findProduct } from "@/api/home"
import { useLazyData } from "@/composables/useLazyData"
const { target, result: Products } = useLazyData(findProduct)
</script>
<style lang="scss" scoped>
.sub-links {
  flex: 1;
  a {
    font-size: 1.6rem;
    text-decoration: none;
    padding: 0.2rem 2rem;

    &:hover {
      background-color: $theme-primary-color;
      color: #fff;
      padding: 0.5rem 2rem;
      border-radius: 1rem;
    }
  }
}

.content-wrapper {
  display: grid;
  grid-template-columns: 240px repeat(1, 1fr);
  grid-column-gap: 1rem;
  .cover {
    position: relative;
    img {
      width: 100%;
      height: 61rem;
      object-fit: cover;
    }

    .label {
      position: absolute;
      left: 0%;
      top: 50%;
      transform: translate(0%, -50%);
      display: flex;
      width: 19.8rem;
      height: 6.6rem;
      line-height: 6.6rem;
      span {
        display: inline-block;
        font-size: 1.6rem;
        color: #fff;
        text-align: center;

        &:first-child {
          width: 7.6rem;
          background-color: rgba(0, 0, 0, 0.9);
        }

        &:last-child {
          background-color: rgba(0, 0, 0, 0.7);
          flex: 1;
        }
      }
    }
  }

  .goods__list-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
  }
}
</style>
