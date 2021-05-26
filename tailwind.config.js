const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    purge: [
        './public/**/*.html',
    	'./src/**/*.vue',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
            },
            colors: {}
        },
    },

    variants: {
        opacity: ['responsive', 'hover', 'focus', 'disabled'],
    },

    plugins: [
        require('@tailwindcss/forms')
    ],
};
