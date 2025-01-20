import 'bootstrap/dist/css/bootstrap.min.css';
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

// app.component('AppCard', AppCard);

app.provide('app-message', 'app message 입니다');
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
