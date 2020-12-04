<template>
  <a :href="'/category/list/aviation'">
    <span role="button" :class="['badge mr-1 mb-1 border border-primary', { 'badge-primary': active }]">
      {{ label }}
    </span>
  </a>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
