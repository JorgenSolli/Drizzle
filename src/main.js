import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false

import { LMap, LTileLayer, LPolyline } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';
import "./app.css";

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-polyline', LPolyline);

new Vue({
  render: h => h(App),
}).$mount('#app')
