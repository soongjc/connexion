<template>
  <section>
    <TagLarge
      v-for="(tag, n) in selectedTags"
      :key="n"
      :label="$t(`tags.${tag.link}`)"
      :path="tag.link"
      class="mt-1 mr-1"
    />
  </section>
</template>
<script>
import TagLarge from '@/components/TagLarge';

export default {
  components: {
    TagLarge,
  },
  data() {
    return {
      tags: [],
    };
  },
  computed: {
    selectedTags: function () {
      return this.tags.splice(0, 10);
    },
  },
  mounted() {
    this.$http.get(`${this.$root.$data.url}/categories`).then((res) => {
      this.tags = res.data;
    });
  },
};
</script>
