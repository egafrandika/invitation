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

