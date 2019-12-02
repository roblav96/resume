import App from './App.vue'
import Vuetify from 'vuetify/lib'
import { Vue, Component } from 'vue-property-decorator'

// @Component({
// 	render: h => h(App),
// })
// class Vm extends Vue {
// 	created() {
// 		setTimeout(() => this.$mount('#app'), 0)
// 	}
// 	mounted() {
// 		console.log(`mounted`)
// 	}
// }

const vm = new Vue({
	vuetify: new Vuetify(),
}).$mount('#app')
console.log(`vm %O ->`, vm)
export default vm

if (process.env.NODE_ENV == 'development') {
	Object.assign(window, { vm })
}
