<template>
  <a class="media py-2" :href="`/${username}`">
    <img :src="image" class="rounded-circle mr-3" />
    <div class="media-body align-self-center">
      <p class="font-weight-bold text-dark mt-0 mb-0">{{ name }}</p>
      <small class="text-muted" v-if="skills.length > 0">{{ skills[0].label }}</small>
    </div>
  </a>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    username: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    skills: {
      type: Array,
      default: null,
    },
  },
};
</script>

<style lang="scss" scoped>
.media {
  img {
    max-width: 50px;
  }
}

a:link,
a:visited,
a:hover,
a:active {
  text-decoration: none;
}
</style>
