import '@ibm/plex/css/ibm-plex.css'
import '@mdi/font/css/materialdesignicons.css'
import './styles/variables.scss'

import Vue from 'vue'
Vue.config.devtools = false
Vue.config.performance = false
Vue.config.productionTip = false

import Vuetify from 'vuetify/lib'
Vue.use(Vuetify)

import('./vm')
