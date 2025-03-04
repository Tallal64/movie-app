/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],

  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
        montserrat: "Montserrat",
        roboto: "Roboto",
        raleway: "Raleway",
      },
    },
  },
  plugins: [],
};
