<template>
  <span role="button" @click="isEnlightened = !isEnlightened">
    <i :class="[isEnlightened ? 'fas' : 'far', 'fa-lightbulb text-warning']"></i>
    <small>{{ isEnlightened ? addCount : count }}</small>
  </span>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    addCount() {
      return +this.count + 1;
    },
    removeCount() {
      return +this.count - 1;
    },
  },
  data() {
    return {
      isEnlightened: false,
    };
  },
};
</script>
