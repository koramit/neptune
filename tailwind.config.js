/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        /*
         * Font
         * - default weight 400
         * - default size 16
         * Gray slate
         * - default text slate 800
         * */
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@headlessui/vue')
    ],
};
