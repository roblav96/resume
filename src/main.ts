import App from './App.vue'
import Vue from 'vue'
import Vuetify from 'vuetify'

Vue.config.devtools = false
Vue.config.performance = false
Vue.config.productionTip = false

Vue.use(Vuetify)

new Vue({
	render: h => h(App),
	vuetify: new Vuetify({
		icons: { iconfont: 'mdi' },
		// theme: { dark: true },
	}),
}).$mount('#app')
