/** @type {import('tailwindcss').Config} */
module.exports = {
        content: [
                "./app/**/*.{js,ts,jsx,tsx,mdx}",      // if using Next 13+ app directory
                "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // if using pages directory
                "./components/**/*.{js,ts,jsx,tsx,mdx}", // includes components/common
        ],
        theme: {
                extend: {},
        },
        plugins: [],
}
