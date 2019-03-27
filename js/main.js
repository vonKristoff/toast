import Vue from 'vue/dist/vue'
import App from './app'

window.App = new Vue(...app)

if(ENV !== 'production') {
    console.log(`${ENV} specific logging is enabled!`);
}