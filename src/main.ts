import './assets/nerd-fonts-generated.css'
import '@ibm/plex/css/ibm-plex.css'
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/dist/vuetify.css'
import './styles.css'

import Vue from 'vue'
Vue.config.devtools = false
Vue.config.performance = false
Vue.config.productionTip = false

import Vuetify from 'vuetify'
Vue.use(Vuetify)

import('./vm')
