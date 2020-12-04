<template>
  <section class="card-columns">
    <template v-for="(post, n) in posts">
      <PostSimple
        class="mb-4"
        :key="n"
        :user="post.user"
        :title="post.title"
        :image="post.image"
        :date="post.date"
        :content="post.content"
        :views="post.views"
        :comments="post.comments.length"
        :likes="post.likes"
        :tags="[{ label: post.tags }]"
      />
    </template>
  </section>
</template>

<script>
import PostSimple from '@/components/PostSimple';
export default {
  components: {
    PostSimple,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
