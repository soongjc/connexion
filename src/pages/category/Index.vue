<template>
  <general-layout>
    <template #content>
      <section class="container-xl py-5">
        <div class="row">
          <div class="col-md-9">
            <Postings :posts="posts" />
            <Pagination v-if="posts.length > 0" :total-pages="3" :current-page="1" />
          </div>
          <div class="col-md-3 widgets">
            <div class="sticky">
              <div class="row">
                <div class="col-12 mb-4">
                  <div class="form-group mb-0">
                    <label class="small font-weight-bold text-uppercase">
                      {{ $t('date') }}
                    </label>
                    <Date />
                  </div>
                </div>
                <div class="col-12 mb-4">
                  <label class="small font-weight-bold text-uppercase">{{ $t('discover_more') }}</label>
                  <Tags />
                </div>
                <div class="col-12 mb-4">
                  <UserWidget :header="$t('thought_leaders')" :users="formattedUsers" />
                </div>
                <div class="col-12">
                  <ArticleWidget :header="$t('trending_article')" :articles="formattedArticlesForWidget" />
                </div>
              </div>
            </div>
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
import Pagination from '@/components/Pagination';
import UserWidget from '@/components/UserWidget';
import ArticleWidget from '@/components/ArticleWidget';
import Date from '@/components/Date';
import Postings from '@/pages/category/Postings';
import Tags from '@/pages/category/Tags';

export default {
  components: {
    GeneralLayout,
    Footer,
    Postings,
    UserProfile,
    Pagination,
    UserWidget,
    ArticleWidget,
    Tags,
    Date,
  },
  computed: {
    formattedUsers: function () {
      return this.users.splice(6, 5);
    },
    formattedArticlesForWidget: function () {
      return this.posts.slice(0, 3);
    },
  },
  data() {
    return {
      users: [],
      posts: [],
    };
  },
  mounted() {
    this.$http.get(`${this.$root.$data.url}/posts`).then((res) => {
      this.posts = res.data;
    });
    this.$http.get(`${this.$root.$data.url}/users`).then((res) => {
      this.users = res.data;
    });
  },
};
</script>

<style scoped>
/* .widgets {
  height: 82vh;
  overflow: scroll;
}

.sticky {
  position: -webkit-sticky;
  position: sticky;
  top: 80px;
  overflow: hidden;
} */
</style>
