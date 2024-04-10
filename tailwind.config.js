/** @type {import('tailwindcss').Config} */
export default {
    content: [
        'src/**/*.vue',
        'index.html',
    ],
    theme: {
        extend: {},
        screens: {
            'sm': '576px',
            // => @media (min-width: 640px) { ... }

            'md': '768px',
            // => @media (min-width: 768px) { ... }

            'lg': '992px',
            // => @media (min-width: 1024px) { ... }

            'xl': '1200px',
            // => @media (min-width: 1280px) { ... }

            '2xl': '1400px',
            // => @media (min-width: 1536px) { ... }
        },
        container: {
            center: true,
            screens: {
                'sm': '540px',
                // => @media (min-width: 640px) { ... }

                'md': '730px',
                // => @media (min-width: 768px) { ... }

                'lg': '960px',
                // => @media (min-width: 1024px) { ... }

                'xl': '1143px',
                // => @media (min-width: 1280px) { ... }

                '2xl': '1320px',
                // => @media (min-width: 1536px) { ... }
            }
        },
    },
    darkMode: 'class',
    plugins: [],
};
