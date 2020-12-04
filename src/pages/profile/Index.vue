<template>
  <general-layout>
    <template #content>
      <section class="container-xl py-5">
        <div class="row justify-content-between">
          <div class="col-md-3">
            <div class="sticky user-profile">
              <UserProfile
                :image="profile.image"
                :username="profile.username"
                :name="profile.name"
                :followers="profile.followers"
                :information="profile.information"
                :skills="profile.skills"
                :is-personal-profile="isPersonalProfile"
              />
            </div>
          </div>
          <div class="col-md-6">
            <PostInput class="mb-4" />
            <hr />
            <template v-for="(shoutout, n) in shoutouts">
              <PostAnnouncement
                class="my-5"
                :key="n"
                :date="shoutout.date"
                :user="shoutout.user"
                :brokername="shoutout.brokername"
                :sharename="shoutout.sharename"
              />
            </template>
            <PostVertical
              v-for="(post, n) in posts"
              :key="`top-${n}`"
              class="mb-4"
              :id="post.post_id"
              :user="post.user"
              :title="post.title"
              :image="post.image"
              :content="post.content"
              :date="post.date"
              :tags="[{ label: post.tags }]"
              :views="post.views"
              :comments="post.comments.length"
              :comments-list="post.comments"
              :likes="post.likes"
              @show-comments="setComments"
            />
          </div>
          <div class="col-md-3">
            <div class="sticky">
              <label class="small font-weight-bold text-uppercase">{{ $t('discover_more') }}</label>
              <Tags class="mb-3" />
              <UserWidget :header="`${$t('following')} (82)`" :users="formattedUsers" />
              <div class="text-right">
                <a href="#" class="small">View all</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Comments :comments="comments" />
      <Footer />
    </template>
  </general-layout>
</template>

<script>
import GeneralLayout from '@/layouts/General';
import Footer from '@/layouts/Footer';
import PostVertical from '@/components/PostVertical';
import PostAnnouncement from '@/components/PostAnnouncement';
import Comments from '@/components/Comments';
import PostInput from '@/components/PostInput';
import UserWidget from '@/components/UserWidget';
import UserProfile from '@/components/UserProfile';
import Tags from '@/pages/profile/Tags';

export default {
  components: {
    GeneralLayout,
    Footer,
    PostVertical,
    PostAnnouncement,
    Comments,
    PostInput,
    UserWidget,
    UserProfile,
    Tags,
  },
  data() {
    return {
      profile: {},
      users: [],
      posts: [],
      shoutouts: [],
      comments: [],
    };
  },
  computed: {
    isPersonalProfile: function () {
      return this.$route.params.username == this.$root.$data.personal.username;
    },
    formattedUsers: function () {
      return this.users.splice(3, 5);
    },
  },
  created() {
    const { personal, others } = this.$root.$data;
    this.profile = this.isPersonalProfile ? personal : others;
  },
  mounted() {
    this.$http.get(`${this.$root.$data.url}/users`).then((res) => {
      this.users = res.data;
    });

    this.$http.get(`${this.$root.$data.url}/posts`).then((res) => {
      this.posts = res.data;
    });

    this.$http.get(`${this.$root.$data.url}/shoutouts`).then((res) => {
      console.log(res.data);
      const found = _.find(res.data, {
        user: {
          username: `${this.profile.username}`,
        },
      });

      if (!_.isUndefined(found)) {
        this.shoutouts.push(found);
      }
      console.log(this.shoutouts);
    });
  },
  methods: {
    setComments(val) {
      this.comments = val;
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
