<template>
  <article class="card">
    <div class="card-body position-relative">
      <i
        role="button"
        :class="[bookmark ? 'fas' : 'far', 'fa-bookmark article-bookmark position-absolute text-danger']"
        @click="bookmark = !bookmark"
      ></i>
      <h5 v-if="title" class="card-title">{{ title }}</h5>
      <div class="card-text">
        <span v-if="!readMoreActivated">{{ content.slice(0, 200) }} ... </span>
        <button v-if="!readMoreActivated && !title" class="btn btn-sm btn-link small mr-2" @click="activateReadMore">
          (Read more)
        </button>
        <a v-if="!readMoreActivated && title" class="card-link small mr-2" :href="`/article/${id}`">(Read more)</a>
        <span v-if="readMoreActivated" v-html="content"></span>
        <button v-if="readMoreActivated" class="btn btn-sm btn-link small mr-2" href="#" @click="activateReadMore">
          (Read less)
        </button>
      </div>
      <div class="d-flex justify-content-between mb-3">
        <figure class="figure mb-0">
          <img :src="`${user.user_image}`" class="rounded-circle" />
          <a :href="`/${user.username}`">
            <span class="text-muted small">{{ user.name }}</span>
          </a>
        </figure>
        <small class="text-muted ml-3">{{ date }}</small>
      </div>
      <div class="d-flex justify-content-between">
        <span>
          <TagSmall v-for="(tag, n) in tags" :key="n" :label="tag.label" />
        </span>
        <a class="mb-0 h4" :href="'/article/1/translate'">
          <i class="fas fa-language text-black-50"></i>
        </a>
      </div>
    </div>
    <img :src="`${image}`" class="card-img-bottom" />
    <div class="card-body py-2 border-top">
      <CommentUtilityBar
        :likes="likes"
        :comments="comments"
        :views="views"
        @clicked="$emit('show-comments', commentsList)"
      />
    </div>
  </article>
</template>

<script>
import TagSmall from '@/components/TagSmall';
import CommentUtilityBar from '@/components/CommentUtilityBar';
export default {
  components: {
    TagSmall,
    CommentUtilityBar,
  },
  props: {
    id: {
      type: [String, Number],
      required: true,
    },
    title: {
      type: String,
    },
    content: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    date: {
      type: String,
    },
    likes: {
      type: Number,
      required: true,
    },
    comments: {
      type: Number,
      required: true,
    },
    commentsList: {
      type: Array,
      required: true,
    },
    views: {
      type: Number,
      required: true,
    },
    user: {
      type: Object,
      default: function () {
        return {
          name: '',
          username: '',
          user_image: '',
        };
      },
    },
    tags: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      bookmark: false,
      readMoreActivated: false,
    };
  },
  methods: {
    activateReadMore() {
      this.readMoreActivated = !this.readMoreActivated;
    },
  },
};
</script>

<style lang="scss" scoped>
.article-bookmark {
  top: -3px;
  right: 15px;
  font-size: 20px;
}

.figure {
  img {
    width: 25px;
  }
}
</style>
