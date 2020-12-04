<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li :class="['page-item', { disabled: currentPage == 1 }]">
        <a class="page-link" href="#">Previous</a>
      </li>
      <li v-for="(pages, n) in totalPages" :key="n" :class="['page-item', { active: n == currentPage - 1 }]">
        <a class="page-link" href="#">{{ n + 1 }}</a>
      </li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  },
};
</script>
