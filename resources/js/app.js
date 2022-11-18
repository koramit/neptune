import axios from 'axios';
window.axios = axios;
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

import '../css/app.css';
import { createApp, h } from 'vue';
import { createInertiaApp } from '@inertiajs/inertia-vue3';
import { InertiaProgress } from '@inertiajs/progress';
import AppLayout from './Components/Layouts/AppLayout.vue';
import PageLayout from './Components/Layouts/PageLayout.vue';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

InertiaProgress.init({
    delay: 200,
    color: '#4B5563',
    showSpinner: true
});

// noinspection JSIgnoredPromiseFromCall,JSUnusedGlobalSymbols
createInertiaApp({
    resolve: name => {
        return resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue'))
            .then(page => {
                let pageLayoutPages = ['LandingPage', 'Auth/LoginForm', 'Auth/RegisterForm', 'UnauthorizedPage'];
                page.default.layout =  pageLayoutPages.includes(name) ? PageLayout : AppLayout;

                return page;
            });
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .mount(el);
    },
});
