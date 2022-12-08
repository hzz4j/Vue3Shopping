<template>
  <div class="panel-container">
    <section class="header">
      <h3 class="title">
        {{ mainTitle }}<small>{{ subTitle }}</small>
      </h3>
      <slot name="right"></slot>
    </section>

    <main class="body">
      <slot></slot>
    </main>
  </div>
</template>

<script setup lang="ts">
interface Props {
  mainTitle?: string
  subTitle?: string
}

withDefaults(defineProps<Props>(), {
  mainTitle: "",
  subTitle: "",
})
</script>

<style lang="scss" scoped>
.panel-container {
  .header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 4rem 0;
    .title {
      font-size: 3.2rem;
      font-weight: normal;
      height: 3.5rem;
      line-height: 3.5rem;
      flex: 1;
      small {
        font-size: 1.6rem;
        margin-left: 2rem;
        color: $gray-deep-color;
      }
    }
  }
}
</style>
