<template>
  <div class="media py-2">
    <div class="media-body align-self-center mr-3">
      <p class="font-weight-bold mt-0 mb-0">{{ title }}</p>
      <small>{{ date }}</small>
    </div>
    <img :src="image" class="article-image align-self-center" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.article-image {
  max-width: 60px;
}
</style>
