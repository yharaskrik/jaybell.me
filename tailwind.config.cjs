/** @type {import('tailwindcss').Config} */
const { join } = require('path');
module.exports = {
    important: true,
    content: [
        join(__dirname, '**/!(*.stories|*.spec).{ts,html,analog,md,scss}'),
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/typography'), require('daisyui')],
    daisyui: {
        themes: [
            {
                light: {
                    ...require('daisyui/src/theming/themes')['light'],
                    secondary: '#7cafd1',
                    primary: '#b3aae2',
                },
            },
        ],
    },
};
