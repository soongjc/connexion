<template>
  <div class="card shadow-sm">
    <div v-if="header" class="card-header text-capitalize">{{ header }}</div>
    <div class="card-body pt-2 pb-3">
      <ArticleInfo
        v-for="(article, n) in articles"
        :key="n"
        :class="[{ 'border-bottom': n + 1 != articles.length }]"
        :title="article.title"
        :date="article.date"
        :image="article.image"
      />
    </div>
  </div>
</template>

<script>
import ArticleInfo from '@/components/ArticleInfo';
export default {
  components: {
    ArticleInfo,
  },
  props: {
    header: {
      type: String,
      default: null,
    },
    articles: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
};
</script>
