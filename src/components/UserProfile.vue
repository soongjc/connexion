<template>
  <div class="card position-relative profile-card">
    <img :src="image" class="position-absolute rounded-circle profile-image" />
    <div class="card-body">
      <h5 class="card-title mb-0">{{ name }}</h5>
      <p class="small text-muted mb-3 text-capitalize">{{ followers }} {{ $t('followers') }}</p>
      <p class="card-text">{{ information }}</p>
      <button
        v-if="!isPersonalProfile"
        type="button"
        :class="['btn btn-sm btn-block', following ? 'btn-success' : 'btn-outline-success']"
        @click="following = !following"
      >
        <i :class="['fas', following ? 'fa-check' : 'fa-plus']"></i>
        {{ following ? 'Following' : 'Follow' }}
      </button>
    </div>
    <ul class="list-group border-0">
      <li
        v-for="(skill, n) in endorsements"
        :key="n"
        class="list-group-item border-right-0 border-bottom-0 border-left-0 border-top rounded-0"
      >
        <span>{{ skill.label }}</span>
        <span role="button" class="badge badge-pill badge-primary float-right mt-1" @click="endorse(skill)">
          {{ skill.endorsement }}
          <template v-if="!isPersonalProfile">
            <i v-if="!hasEndorsed(skill)" class="fas fa-plus ml-1"></i>
            <i v-else class="fas fa-check ml-1"></i>
          </template>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
    username: {
      type: [String, Number],
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    information: {
      type: String,
      required: true,
    },
    followers: {
      type: Number,
      required: true,
    },
    isPersonalProfile: {
      type: Boolean,
      default: false,
    },
    skills: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  data() {
    return {
      endorsements: [],
      endorsed: [],
      following: false,
    };
  },
  mounted() {
    this.endorsements = this.skills;
  },
  methods: {
    endorse(skill) {
      if (this.isPersonalProfile) return;

      if (this.hasEndorsed(skill)) {
        skill.endorsement--;
        const index = _.findIndex(this.endorsed, { label: skill.label });
        this.endorsed.splice(index, 1);
        return;
      }

      skill.endorsement++;
      this.endorsed.push(skill);
    },
    hasEndorsed(skill) {
      const found = _.find(this.endorsed, { label: skill.label });
      return !_.isUndefined(found);
    },
  },
};
</script>

<style scoped>
.profile-card {
  margin-top: 80px;
}

.profile-card .profile-image {
  left: 0;
  right: 0;
  margin: 0 auto;
  top: -65px;
}
.profile-card .card-body {
  padding-top: 70px;
}
</style>
