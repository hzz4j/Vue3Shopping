<template>
  <p class="price"><i>¥</i>{{ price }}</p>
</template>

<script setup lang="ts">
defineProps({
  price: {
    type: String,
    required: true,
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
