import Vue from 'vue'
import App from './App.vue'
import AppContador from './AppContador.vue'
import AppHeader from './AppHeader'

Vue.component('AppHeader', AppHeader)
Vue.component('AppContador', AppContador);

new Vue ({
    render: h => h(App)
}).$mount('#app')
