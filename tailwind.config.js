module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Montserrat', 'sans-serif'],
            },
        },
    },
    corePlugins: {
        // Можна вимкнути деякі плагіни, які можуть бути не підтримувані старими браузерами
        preflight: false,
    },
    plugins: [],
    future: {
        // Переключає на підтримку більш сумісного синтаксису
        purgeLayersByDefault: true,
    },
    // Встановлення підтримки старих браузерів через Browserslist
    purge: {
        enabled: process.env.NODE_ENV === 'production',
        options: {
            safelist: ['bg-red-500', 'text-center'], // Список класів, які не будуть очищені
        },
    },
};
