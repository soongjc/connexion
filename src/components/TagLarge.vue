<template>
  <a
    :href="`/category/list/${path}`"
    :class="['btn btn-sm text-capitalize', active ? 'btn-primary' : 'btn-outline-primary']"
  >
    {{ label }}
  </a>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
    },
  },
};
</script>
