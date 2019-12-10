import App from './App.vue'
import store from './store'
import Vue from 'vue'
import Vuetify from 'vuetify'

export const vm = new Vue({
	data: store,
	render: h => h(App),
	vuetify: new Vuetify({
		icons: { iconfont: 'mdi' },
		theme: { dark: true },
	}),
}).$mount('#app')
export default vm

if (process.env.NODE_ENV == 'development') {
	Object.assign(window, { vm })
	console.log(`vm.$root ->`, vm.$root)
	console.log(`vm.$root.$data ->`, vm.$root.$data)
	console.log(`module ->`, module)
	console.log(`module.hot ->`, module.hot)
}
