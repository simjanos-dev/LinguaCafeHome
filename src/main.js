// import {Vue, createApp} from 'vue'
// import VueRouter from 'vue-router';
// import vuetify from './plugins/vuetify'

// Vue.config.productionTip = false

// window.Vue = require('vue').default;
// window.Vue.use(VueRouter);

// import Layout from './components/Layout.vue';
// import Layout from './components/Home.vue';

// const router = new VueRouter({
//   mode: 'history',
//   routes: [
//       { path: '/', component: Home },

//   ]
// })

// const app = new Vue({
//   router,
//   el: '#app',
//   vuetify
// });

// const app = createApp(Layout)
// app.use(router);
// app.mount('#app')
//////////////////////////////////////6

import Vue from 'vue'
import VueRouter from 'vue-router';
import vuetify from './plugins/vuetify'

window.Vue = require('vue').default;
window.Vue.use(VueRouter);

import Layout from './components/Layout.vue';
Vue.component('layout', Layout);

// user manual
const UserManual = require('./components/UserManual/UserManual.vue').default;
import UserManualIntroduction from './components/UserManual/Pages/UserManualIntroduction';
import UserManualBackup from './components/UserManual/Pages/UserManualBackup';
import UserManualLanguages from './components/UserManual/Pages/UserManualLanguages';
import UserManualReading from './components/UserManual/Pages/UserManualReading';
import UserManualVocabularyImport from './components/UserManual/Pages/UserManualVocabularyImport';

Vue.component('user-manual-introduction', UserManualIntroduction);
Vue.component('user-manual-backup', UserManualBackup);
Vue.component('user-manual-languages', UserManualLanguages);
Vue.component('user-manual-reading', UserManualReading);
Vue.component('user-manual-vocabulary-import', UserManualVocabularyImport);

const Home = require('./components/Home.vue').default;

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: Home },
        { path: '/user-manual/:currentPage?', component: UserManual },
    ]
})

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    router,
    vuetify,
    el: '#app',
    render: function (h) { return h(Layout) }
});


