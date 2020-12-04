<template>
  <small>
    <i v-for="n in stars" :key="`solid-${n}`" class="fas fa-star text-warning"></i>
    <i v-for="n in 5 - stars" :key="`empty-${n}`" :class="['far fa-star text-warning', { 'adjusted-gap': n == 1 }]"></i>
  </small>
</template>

<script>
export default {
  props: {
    stars: {
      type: Number,
      required: true,
    },
  },
};
</script>

<style scoped>
.adjusted-gap {
  margin-left: -3px;
}
</style>
