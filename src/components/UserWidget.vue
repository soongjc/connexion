<template>
  <div class="card shadow-sm">
    <div v-if="header" class="card-header text-capitalize">{{ header }}</div>
    <div class="card-body pt-2 pb-3">
      <template v-for="(user, n) in users">
        <UserProfileSimple
          v-if="username !== user.username"
          :key="n"
          :class="[{ 'border-bottom': n + 1 != users.length }]"
          :image="user.user_image"
          :username="user.username"
          :name="user.name"
          :skills="user.skills"
        />
      </template>
    </div>
  </div>
</template>

<script>
import UserProfileSimple from '@/components/UserProfileSimple';
export default {
  components: {
    UserProfileSimple,
  },
  props: {
    header: {
      type: String,
      default: null,
    },
    users: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  computed: {
    username: function () {
      return this.$route.params.username;
    },
  },
};
</script>
