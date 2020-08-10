import Vue from 'vue';
import VueCompositionAPI from '@vue/composition-api';
import hooks from '@u3u/vue-hooks';
import App from './App.vue';
import router from './router';
import store from './store';

import 'bulma/css/bulma.css';

Vue.config.productionTip = false;
Vue.use(VueCompositionAPI);
Vue.use(hooks);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
