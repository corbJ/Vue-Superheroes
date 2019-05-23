// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from '@/lang/messages'
import App from '@/App'
import router from '@/router'
import vbclass from 'vue-body-class'
import 'normalize.css'
import '@/assets/scss/app.scss'

Vue.use(VueI18n)
Vue.use(vbclass, router)
Vue.config.productionTip = false

let locale = navigator.language
const i18n = new VueI18n({
  fallbackLocale: 'fr-FR',
  locale: locale,
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
