import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

Vue.config.productionTip = false

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

new Vue({
  vuetify,
  render: function (h) { return h(App) }
}).$mount('#app')
