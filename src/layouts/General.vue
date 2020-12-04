<template>
  <div>
    <nav class="navbar navbar-light fixed-top navbar-light bg-white border-bottom">
      <div class="container-fluid">
        <a class="navbar-brand" :href="`/1`">CONNEXION</a>
        <div class="form-inline">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" />
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button">
                <i class="fas fa-search"></i>
              </button>
            </div>
          </div>

          <div class="dropdown ml-3">
            <button
              class="btn btn-secondary btn-sm dropdown-toggle text-uppercase"
              type="button"
              data-toggle="dropdown"
            >
              {{ currentLanguage }}
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button
                v-for="(lang, i) in $root.$data.languages"
                :key="`lang-${i}`"
                class="dropdown-item text-uppercase"
                type="button"
                @click="changeLanguage(lang)"
              >
                {{ lang }}
              </button>
            </div>
          </div>

          <a :href="'/1'">
            <img :src="$root.$data.personal.image" class="profile rounded-circle ml-3" />
          </a>
        </div>
      </div>
    </nav>
    <body class="px-4" style="padding-top: 57px">
      <slot name="content"></slot>
    </body>
  </div>
</template>

<script>
export default {
  computed: {
    currentLanguage() {
      return this.$i18n.locale;
    },
  },
  methods: {
    changeLanguage(lang) {
      this.$i18n.locale = lang;
      localStorage.setItem(`${this.$root.$data.prefix}_lang`, lang);
    },
  },
};
</script>

<style lang="scss" scoped>
.profile {
  max-width: 40px;
}
</style>
