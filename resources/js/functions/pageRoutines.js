import {usePage} from '@inertiajs/inertia-vue3';
import {nextTick, onMounted, onUnmounted} from 'vue';

export function pageRoutines() {
    let lastTimeCheckSessionTimeout = Date.now();

    const sessionLifetimeSeconds = usePage().props.sessionTimeoutInSeconds;
    const checkSessionTimeoutOnFocus = () => {
        let timeDiff = Date.now() - lastTimeCheckSessionTimeout;
        if ((timeDiff) > (sessionLifetimeSeconds)) {
            window.axios
                .post(usePage().props.routes.checkTimeout)
                .then(() => lastTimeCheckSessionTimeout = Date.now())
                .catch(() => location.reload());
        }
    };

    onMounted(() => {
        window.addEventListener('focus', checkSessionTimeoutOnFocus);

        nextTick(() => {
            const pageLoadingIndicator = document.getElementById('page-loading-indicator');
            if (pageLoadingIndicator) {
                pageLoadingIndicator.remove();
            }
        });
    });

    onUnmounted(() => {
        window.removeEventListener('focus', checkSessionTimeoutOnFocus);
    });
}
