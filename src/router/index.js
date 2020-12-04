import Vue from 'vue';
import Router from 'vue-router';
import Landing from '@/pages/Landing';
import Category from '@/pages/category/Index';
import Profile from '@/pages/profile/Index';
import Article from '@/pages/article/Index';
import Translator from '@/pages/article/Translator';
import RegisterToBroker from '@/pages/forms/RegisterToBroker';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: '',
      component: Landing,
    },
    {
      path: '/category/list/:category',
      name: 'Category listing',
      component: Category,
    },
    {
      path: '/article/create',
      name: 'Article create',
      component: Article,
    },
    {
      path: '/article/:articleId',
      name: 'Article',
      component: Article,
    },
    {
      path: '/article/:articleId/translate',
      name: 'Article translator',
      component: Translator,
    },
    {
      path: '/broker/:broker/registration',
      name: 'Broker registration',
      component: RegisterToBroker,
    },
    {
      path: '/:username',
      name: 'User profile',
      component: Profile,
    },
  ],
});
