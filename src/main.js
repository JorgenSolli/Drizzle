import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router'
import App from './App.vue';
import { Icon } from 'leaflet';
import VueLuxon from "vue-luxon";
import PortalVue from 'portal-vue'
import router from './routes.js'

Vue.config.productionTip = false
import { LMap, LTileLayer, LTooltip, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import "./app.css";

// Fix marker icon
delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});

Vue.component('LMap', LMap);
Vue.component('LTileLayer', LTileLayer);
Vue.component('LTooltip', LTooltip);
Vue.component('LMarker', LMarker);

Vue.use(VueLuxon);
Vue.use(PortalVue);
Vue.use(Vuex);
Vue.use(VueRouter);

const store = new Vuex.Store({
    state: {
        locations: [],
    },
    mutations: {
        setLocations(state, locations) {
            state.locations = locations
        },
        addLocation(state, location) {
            state.locations.push(location);
        },
        removeLocation(state, locationKey) {
            state.locations.splice(locationKey, 1);
        }
    }
});

new Vue({
    render: h => h(App),
    store,
    router
}).$mount('#app')
