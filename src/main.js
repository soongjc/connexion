// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Axios from 'axios';
import VueI18n from 'vue-i18n';
import 'bootstrap';

Vue.prototype.$http = Axios;
Vue.config.productionTip = false;
Vue.use(VueI18n);

import { languages, defaultLocale } from '@/locales/index.js';

const lang = localStorage.getItem('connexion_lang');
const locale = _.defaultTo(lang, defaultLocale);

var i18n = new VueI18n({
  locale,
  fallbackLocale: 'en',
  messages: languages,
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  router,
  template: '<App/>',
  components: { App },
  data() {
    return {
      prefix: 'connexion',
      languages: _.keys(languages),
      url: 'http://54.169.8.42',
      personal: {
        image: 'https://randomuser.me/api/portraits/men/92.jpg',
        username: 1,
        name: 'Muhd. Shafiq',
        followers: 120,
        information: `Web developer and part time stock trader. Always out and about for good beer.`,
        skills: [
          { label: 'Finance', endorsement: 100 },
          { label: 'Healthcare', endorsement: 65 },
          { label: 'Aviation', endorsement: 67 },
        ],
      },
      others: {
        image: 'https://randomuser.me/api/portraits/women/19.jpg',
        username: 7,
        name: 'Brittany Burns',
        followers: 80,
        information: `Former air stewardess. Now a self-taught full-time investor in hospitality and aviation stock.`,
        skills: [
          { label: 'Aviation', endorsement: 118 },
          { label: 'Taxes', endorsement: 83 },
          { label: 'Medical', endorsement: 56 },
        ],
      },
    };
  },
});
