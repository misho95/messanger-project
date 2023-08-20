/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      height: {
        C_H: "calc(100vh - 200px)",
      },
    },
  },
  plugins: [],
};
