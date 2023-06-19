/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image-background': "url('/asset/home-image.jpeg')",
      },
      boxShadow: {
        'shadow-one': '0 3px 6px 2px rgba(51, 51, 51, .3)'
      },
      fontFamily: {
        'base-wedding': ['Elsie', 'sans-serif'],
        'second-wedding': ["second-wedding","sans"], 
        'third-wedding': ['third-wedding'],
        'four-wedding': ['four-wedding']
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ]
}

