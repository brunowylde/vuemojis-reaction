import Vuemojis from './Vuemojis.vue';

export default {
  install(Vue) {
    Vue.component('VuemojisReaction', Vuemojis);
  }
};

export { Vuemojis };
