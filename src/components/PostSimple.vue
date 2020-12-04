<template>
  <div class="card">
    <img v-if="image" :src="image" class="card-img-top" />
    <div class="card-body">
      <h5 class="card-title mb-0">{{ title }}</h5>
      <div class="d-flex justify-content-between mb-3">
        <Enlight :count="likes" />
        <i
          role="button"
          :class="[bookmark ? 'fas' : 'far', 'fa-bookmark text-danger']"
          @click="bookmark = !bookmark"
        ></i>
      </div>
      <div class="card-text">
        <span v-if="!readMoreActivated">{{ content.slice(0, 200) }} ... </span>
        <button v-if="!readMoreActivated" class="btn btn-sm btn-link small mr-2" @click="activateReadMore">
          (Read more)
        </button>
        <span v-if="readMoreActivated" v-html="content"></span>
        <button v-if="readMoreActivated" class="btn btn-sm btn-link small mr-2" href="#" @click="activateReadMore">
          (Read less)
        </button>
      </div>
      <div>
        <figure class="figure mb-0">
          <img :src="user.user_image" class="rounded-circle" />
          <a :href="`/${user.username}`">
            <span class="text-muted small">{{ user.name }}</span>
          </a>
        </figure>
      </div>
      <div class="text-muted small mb-3">{{ date }}</div>
      <div>
        <TagSmall v-for="(tag, n) in tags" :key="n" :label="tag.label" :active="tag == 'Aviation'" />
      </div>
    </div>
  </div>
</template>

<script>
import Enlight from '@/components/Enlight';
import TagSmall from '@/components/TagSmall';

export default {
  components: {
    Enlight,
    TagSmall,
  },
  props: {
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
figure {
  img {
    width: 25px;
  }
}
</style>
