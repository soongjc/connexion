<template>
  <general-layout>
    <template #content>
      <section class="container py-5">
        <div class="row justify-content-center">
          <div v-if="!hasArticleId" class="col-md-1">
            <ul class="list-group text-center sticky">
              <li class="list-group-item" role="button"><i class="fas fa-bold"></i></li>
              <li class="list-group-item" role="button"><i class="fas fa-italic"></i></li>
              <li class="list-group-item" role="button"><i class="fas fa-underline"></i></li>
              <li class="list-group-item" role="button"><i class="fas fa-list-ul"></i></li>
              <li class="list-group-item" role="button"><i class="fas fa-list-ol"></i></li>
            </ul>
          </div>
          <div v-else class="col-md-3">
            <div class="sticky user-profile">
              <UserProfile
                v-if="hasProfile"
                :image="profile.user_image"
                :username="profile.username"
                :name="profile.name"
                :followers="100"
                :information="profile.introduction"
                :skills="profile.skills"
                :is-personal-profile="false"
              />
            </div>
          </div>
          <div class="col-md-8">
            <h3 class="text-center">{{ article.title }}</h3>
            <img v-if="hasArticleId" :src="article.image" class="d-block mx-auto img-fluid my-3" />
            <p v-if="hasArticleId" v-html="article.content"></p>
            <div v-else>
              <textarea class="form-control" rows="20">
Singapore's flag carrier, which has cut thousands of jobs and grounded nearly all its planes this year, offered passengers the chance to dine on board two of the world's biggest passenger jets. Hundreds of travel-starved diners tucked into lunch and watched seat-back films aboard two parked Singapore Airlines jets that have turned into pop-up restaurants. With the aviation industry in deep crisis due to the coronavirus pandemic, airlines have turned to alternative ways to raise cash. Singapore's flag carrier, which has cut thousands of jobs and grounded nearly all its planes this year, offered passengers the chance to dine on board two A380 superjumbos – the world's biggest passenger jet.
              </textarea>
            </div>
            <div v-if="!hasArticleId" class="mt-5 text-center">
              <a class="btn btn-primary px-5 mx-auto" :href="'/saravanan-0234'">Post Article</a>
            </div>
            <template v-else>
              <CommentUtilityBar
                v-if="hasArticle"
                class="border px-4 py-2 bg-white"
                :views="article.views"
                :comments="article.comments.length"
                :likes="article.likes"
              />
            </template>
          </div>
        </div>
      </section>
      <Footer />
    </template>
  </general-layout>
</template>

<script>
import GeneralLayout from '@/layouts/General';
import Footer from '@/layouts/Footer';
import UserProfile from '@/components/UserProfile';
import CommentUtilityBar from '@/components/CommentUtilityBar';
export default {
  components: {
    GeneralLayout,
    Footer,
    UserProfile,
    CommentUtilityBar,
  },
  data() {
    return {
      article: {},
      profile: {},
      userName: '',
    };
  },
  computed: {
    articleId: function () {
      return _.get(this.$route.params, 'articleId', null);
    },
    hasArticleId: function () {
      return !_.isNull(this.articleId);
    },
    hasProfile: function () {
      return !_.isEmpty(this.profile);
    },
    hasArticle: function () {
      return !_.isEmpty(this.article);
    },
  },
  async mounted() {
    if (this.articleId) {
      await this.getPost(this.articleId);
      this.getUser();
    }
  },
  methods: {
    getPost(articleId) {
      return this.$http.get(`${this.$root.$data.url}/posts?post_id=${articleId}`).then((res) => {
        this.article = res.data[0];
        this.userName = this.article.user.name;
        return this.article;
      });
    },
    getUser() {
      this.$http.get(`${this.$root.$data.url}/users?name=${encodeURIComponent(this.userName)}`).then((res) => {
        this.profile = res.data[0];
      });
    },
  },
};
</script>

<style scoped>
.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
}
.sticky.user-profile {
  top: 160px;
}
</style>
