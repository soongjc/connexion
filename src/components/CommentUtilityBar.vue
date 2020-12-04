<template>
  <section class="d-flex justify-content-between align-middle">
    <small class="text-muted pt-1">{{ views }} Views</small>
    <span
      role="button"
      class="text-muted pt-1 small"
      data-toggle="modal"
      data-target="#commentModal"
      @click="$emit('clicked')"
    >
      {{ comments }} Comments
    </span>
    <span role="button" class="text-muted mb-0"><Enlight :count="likes" /></span>
  </section>
</template>

<script>
import Enlight from '@/components/Enlight';
export default {
  components: {
    Enlight,
  },
  props: {
    views: {
      type: Number,
      required: true,
    },
    comments: {
      type: Number,
      required: true,
    },
    likes: {
      type: Number,
      required: true,
    },
  },
};
</script>
