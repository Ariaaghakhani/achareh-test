import { createApp,markRaw } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'bootstrap';
import 'mosha-vue-toastify/dist/style.css';
import {createPinia} from 'pinia';
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'


const pinia = createPinia();
const app = createApp(App);

router.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});
pinia.use(({store}) => {
    store.router = markRaw(router)
});
pinia.use(piniaPluginPersistedstate);
app.use(pinia);
createApp(App).use(router).mount('#app')
