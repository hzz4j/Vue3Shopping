<template>
  <p class="price">
    <i>{{ unit }}</i
    >{{ price }}
  </p>
</template>

<script setup lang="ts">
defineProps({
  price: {
    type: String,
    required: true,
  },
  unit: {
    type: String,
    default: "¥",
  },
})
</script>

<style lang="scss" scoped>
.price {
  font-size: 2.2rem;
  color: $priceColor;

  i {
    font-size: 1.6rem;
  }
}
</style>
